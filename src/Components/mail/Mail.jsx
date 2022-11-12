
import React from 'react'
import './Mail.css'
const Mail = () => {
  return (
    <div className="mail">
        <div className="mailTitle">
            <h1>Save time Save Money</h1>
            <div className="mailDesc">
                sign up and we will send a deal with you!
                <div className="mailInput">
                    <input placeholder='Enter your email'></input>
                  <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail
