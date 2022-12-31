import useFetch from "../../hooks/useFetch";
import "./features.css";

const Features = () => {
  const {data,loading,error}=useFetch("/hotels/countByCity?cities=Lahore,Skardu,Rawalpindi, islamabad,Karachi")
 // console.log(data);
 
  return (
    <div className='features'>
     {loading?
     (
      "loading please wait"
      ):
     ( <>
     <div className="featuresItem">
      <div className="featuresImg">
        <img src='https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsJTIwZnJvbnQlMjBzaWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alter="imgage"/>
        <div className="featuresTitle">
        <h1 className="saim">Sarena Hotel</h1>
        <h2 className="saimDsc">{data[0]}</h2>
        </div>
      </div>  
     </div> 
     <div className="featuresItem">
      <div className="featuresImg">
        <img src='https://images.unsplash.com/photo-1542372041-620dfb05997c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwZnJvbnQlMjBzaWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alter="imgage"/>
        <div className="featuresTitle">
        <h1 className="saim">k-2 Hotel</h1>
        <h2 className="saimDsc">{data[1]}</h2>
        </div>
      </div>  
     </div> 
     <div className="featuresItem">
      <div className="featuresImg">
        <img src='https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alter="imgage"/>
        <div className="featuresTitle">
        <h1 className="saim">PC Hotel</h1>
        <h2 className="saimDsc"> {data[2]}</h2>
        </div>
      </div>  
     </div>
     </>
      ) 
    } 
    </div>
  )
}

export default Features
