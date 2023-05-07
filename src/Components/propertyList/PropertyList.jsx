import React from 'react';
import './propertyList.css';
const propertyList = () => {
  return (
    <div>
       <div className="propertyList">
        <div className="pItem">
            <img className="pImg" src='https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
           <div className="pTitle">
           <h1>Hotels</h1> 
               <h2>5000 Hotels</h2>
            </div>
         
        </div>
        <div className="pItem">
           
            <img src='https://images.unsplash.com/photo-1629371997433-d11e6161a8b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='image' className="pImg"/>
           <div className="pTitle">
              
               <h1>Appartsment</h1> 
               <h2>2000 Appartsment</h2>
             
           </div>
        </div>
        <div className="pItem">
            <img className="pImg" src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
           <div className="pTitle">
               <h1>Villas</h1> 
               <h2>100 Villas</h2>
            </div>
         
        </div>
        <div className="pItem">
            <img className="pImg" src='https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
           <div className="pTitle">
               <h1>Resorts</h1> 
               <h2>100 Resorts</h2>
            </div>
         
        </div>
       
       
      </div>
    </div>
  );
}

export default propertyList;
