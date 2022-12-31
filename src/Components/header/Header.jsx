import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState,useContext } from 'react';
import { DateRange } from 'react-date-range';
import React from './header.css';
import { format } from 'date-fns';
import { isDisabled } from '@testing-library/user-event/dist/utils';
 import { useNavigate } from "react-router-dom";
 import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from "../../context/AuthContext";
const Header = ({type}) => {
  const { user } = useContext(AuthContext);
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [distination, setDistination] = useState("");
  const navigate=useNavigate("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const { dispatch } = useContext(SearchContext);
  const handlSearch=()=>{
    
  dispatch({ type: "NEW_SEARCH", payload: { distination, dates, options } });
   navigate("/hotels",{ state:{ distination,dates,options}});

   
    
  }

  return (
    <div className='header'>
      <div className={type !== "list"? "headerContainer":"headerContainer listMode" }>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type!=="list" && <><h1 className="headerTitle">A lifetime of discount, It's genous</h1>

        <p className="headerDisc">Get reward for your travel - unlock instance savinng  of 10% or more with free SaimBooking account</p>
        {!user && <button className="headBtn">Sign in/ Register</button>}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon className='headerSearchIcon' icon={faBed} />
            <input onChange={(e)=>
              setDistination(e.target.value)
            } type="text" className='headerSearchInput'
              placeholder='Where are you going?'></input>
          </div>
          <div className="headerSearchItem" >
            <FontAwesomeIcon className='headerSearchIcon' icon={faCalendarDays} />
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")}
         to ${format(dates[0].endDate, "MM/dd/yyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              className="date"
              ranges={dates}
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className='headerSearchIcon' icon={faPerson} />
            <span onClick={() => setOpenOption(!openOption)} className='headerSearchText'>{` ${options.adult}. Adult ${options.children} .Childeren ${options.room} . Room`}</span>
            { openOption && <div className="option">
              <div className="optionItem">
                <div className="optionText">Adult</div>
                <div className="optionCounter">
                  <button  onClick={() => handleOption('adult', 'i')} className="optionCounterBtn">+</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button disabled={options.adult<=0} onClick={() => handleOption('adult', 'd')} className="optionCounterBtn">-</button>
                </div>
              </div>
              <div className="optionItem">
                <div className="optionText">Children</div>
                <div className="optionCounter">
                  <button onClick={() => handleOption('children', 'i')} className="optionCounterBtn">+</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button disabled={options.children<=0} onClick={() => handleOption('children', 'd')} className="optionCounterBtn">-</button>
                </div>
              </div>
              <div className="optionItem">
                <div className="optionText">Room</div>
                <div className="optionCounter">
                  <button onClick={() => handleOption('room', 'i')} className="optionCounterBtn">+</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button disabled={options.room<=0} onClick={() => handleOption('room', 'd')} className="optionCounterBtn">-</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button onClick={handlSearch} className="headerBtn">Search</button>
          </div>
        </div></>}
      </div>

    </div>

  )
}

export default Header
