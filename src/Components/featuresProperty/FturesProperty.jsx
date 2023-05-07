import React from 'react';
import './FturesProperty.css'
const FturesProperty = () => {
  return (
    <div className='fpList'>
      <div className="fpItem">
        <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="fpimg" />
        <span className="fpName">K-2</span>
        <span className="fpCity">Skardu</span>
        <span className="fpPrice"> Starting from 200$</span>
        <div className="fpRating">
            <button>8.90</button>
            <span className="fpComment">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://th.bing.com/th/id/OIP.HY9bgUy4tEp_OqP7Ype0FwEsDc?w=221&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="fpimg" />
        <span className="fpName">PC Hotel</span>
        <span className="fpCity">Islamabad</span>
        <span className="fpPrice"> Starting from 200$</span>
        <div className="fpRating">
            <button>8.90</button>
            <span className="fpComment">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="fpimg" />
        <span className="fpName">Sarena</span>
        <span className="fpCity">Islamabad</span>
        <span className="fpPrice"> Starting from 300$</span>
        <div className="fpRating">
            <button>10.00</button>
            <span className="fpComment">Excellent</span>
        </div>
      </div>
      
    
    </div>
  );
}

export default FturesProperty;
