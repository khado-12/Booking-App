import React from 'react'
import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import Header from '../../Components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import { format } from 'date-fns';
import './list.css';
import { DateRange } from 'react-date-range';
import SearchItems from '../../Components/searchItems/SearchItems';
const List = () => {
  const location = useLocation();
  const [distination, setDistination]= useState(location.state.distination);
  const [date, setDate]= useState(location.state.date);
  const [option, setOption]= useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  return (
    <div>
     <Navbar/>
     <Header type={"list"}/>
     <div className="listContainer">
     <div className="listWrapper">
      <div className="listSearch">
        <h1 className='listTitle'>Search</h1>
        <div className="lsItems">
          <label htmlFor="">Distination</label>
          <input type="text" placeholder='Distination' className="text" />
        </div>
        <div className="lsItems">
          <label htmlFor="">Check-in Date</label>
         <span onClick={()=>{
         setOpenDate(!openDate)
         }}>{`${format(date[0].startDate, "MM/dd/yyyy")}
         to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
        {openDate && (<DateRange
         onChange={item => setDate([item.selection])}
         minDate= {new Date()}
         ranges={date}
         />)}
        </div>
        <div className="lsItems">
        <label>Option</label>
        <div className="LsOption">
          <div className="LsOptionItems">
            <label htmlFor="">Maximum Price <small>per Night</small></label>
            <input type="" className="text" />
          </div>
          <div className="LsOptionItems">
            <label htmlFor="">Minimum Price <small>per Night</small></label>
            <input type="" className="text" />
          </div>
          <div className="LsOptionItems">
            <label  htmlFor="">Adult</label>
            <input type="number" min={0} placeholder={ option.adult} className="text" />
          </div>
          <div className="LsOptionItems">
            <label >Children</label>
            <input type="number" min={0} placeholder={ option.children} className="text" />
          </div>
          <div className="LsOptionItems">
            <label >Room</label>
            <input type="number"min={1} placeholder={ option.room} className="text" />
          </div>
        </div>
        </div>

      <button className="lsBtn">search</button>
      </div>
      <div className="listResult">
        <SearchItems/>
        
      </div>
     </div>

     </div>
    </div>
  )
}

export default List
