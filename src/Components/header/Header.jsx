import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import React from './header.css';
import { format } from 'date-fns';
import { isDisabled } from '@testing-library/user-event/dist/utils';
 import { useNavigate } from "react-router-dom";

const Header = ({type}) => {

  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [distination, setDistination] = useState("");
  const navigate=useNavigate("");
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const handlSearch=()=>{
   navigate("/hotels",{ state:{ distination,date,option}});

   
    
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
            <span>Flight</span>
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
        <button className="headBtn">Sign in/ Register</button>
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
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")}
         to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              className="date"
              ranges={date}
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className='headerSearchIcon' icon={faPerson} />
            <span onClick={() => setOpenOption(!openOption)} className='headerSearchText'>{` ${option.adult}. Adult ${option.children} .Childeren ${option.room} . Room`}</span>
            { openOption && <div className="option">
              <div className="optionItem">
                <div className="optionText">Adult</div>
                <div className="optionCounter">
                  <button  onClick={() => handleOption('adult', 'i')} className="optionCounterBtn">+</button>
                  <span className="optionCounterNumber">{option.adult}</span>
                  <button disabled={option.adult<=0} onClick={() => handleOption('adult', 'd')} className="optionCounterBtn">-</button>
                </div>
              </div>
              <div className="optionItem">
                <div className="optionText">Children</div>
                <div className="optionCounter">
                  <button onClick={() => handleOption('children', 'i')} className="optionCounterBtn">+</button>
                  <span className="optionCounterNumber">{option.children}</span>
                  <button disabled={option.children<=0} onClick={() => handleOption('children', 'd')} className="optionCounterBtn">-</button>
                </div>
              </div>
              <div className="optionItem">
                <div className="optionText">Room</div>
                <div className="optionCounter">
                  <button onClick={() => handleOption('room', 'i')} className="optionCounterBtn">+</button>
                  <span className="optionCounterNumber">{option.room}</span>
                  <button disabled={option.room<=0} onClick={() => handleOption('room', 'd')} className="optionCounterBtn">-</button>
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
