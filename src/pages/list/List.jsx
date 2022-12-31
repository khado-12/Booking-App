import React from 'react'
import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import Header from '../../Components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import { format } from 'date-fns';
import './list.css';
import { DateRange } from 'react-date-range';
import SearchItems from '../../Components/searchItems/SearchItems';
import useFetch from "../../hooks/useFetch";
const List = () => {
  const location = useLocation();
  const [distination, setdistination]= useState(location.state.distination);
  const [dates, setDates]= useState(location.state.dates);
  const [options, setOptions]= useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  // const [openOption, setOpenOption] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${distination}&min=${min || 0 }&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
     <Navbar/>
     <Header type={"list"}/>
     <div className="listContainer">
     <div className="listWrapper">
      <div className="listSearch">
        <h1 className='listTitle'>Search</h1>
        <div className="lsItems">
          <label htmlFor="">distination</label>
          <input type="text" placeholder={distination} className="text" />
        </div>
        <div className="lsItems">
          <label htmlFor="">Check-in Date</label>
         <span onClick={()=>{
         setOpenDate(!openDate)
         }}>{`${format(dates[0].startDate, "MM/dd/yyyy")}
         to ${format(dates[0].endDate, "MM/dd/yyy")}`}</span>
        {openDate && (<DateRange
         onChange={item => setDates([item.selection])}
         minDate= {new Date()}
         ranges={dates}
         />)}
        </div>
        <div className="lsItems">
        <label>Option</label>
        <div className="LsOption">
          <div className="LsOptionItems">
            <label htmlFor="">Maximum Price <small>per Night</small></label>
            <input type="number" onChange={(e) => setMax(e.target.value)}  className="text" />
          </div>
          <div className="LsOptionItems">
            <label htmlFor="">Minimum Price <small>per Night</small></label>
            <input type="number" onChange={(e) => setMin(e.target.value)} className="text" />
          </div>
          <div className="LsOptionItems">
            <label  htmlFor="">Adult</label>
            <input type="number" min={0} placeholder={ options.adult} className="text" />
          </div>
          <div className="LsOptionItems">
            <label >Children</label>
            <input type="number" min={0} placeholder={ options.children} className="text" />
          </div>
          <div className="LsOptionItems">
            <label >Room</label>
            <input type="number"min={1} placeholder={ options.room} className="text" />
          </div>
        </div>
        </div>

      <button className="lsBtn" onClick={handleClick}>search</button>
      </div>
      <div className="listResult">
        { loading ? "loading...":
        <>
        {
          data.map(item=>(
            <SearchItems item={item} key={item._id}/>
          ))
        }
        </>
         }
        
      </div>
     </div>

     </div>
    </div>
  )
}

export default List
