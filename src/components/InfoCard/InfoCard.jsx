import React from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons";
import { useState } from 'react';
import ProfileModel from "../ProfileModel/ProfileModel.jsx"

const InfoCard = () => {
  const [modelOpend,setmodelOpend] = useState(false);
  return (
    <div className='InfoCard'>
       <div className="infoHead">
            <h4>Your Info</h4>
            <div>
                 <UilPen width= "2rem" height ="1.2rem" onClick={()=> setmodelOpend(true)}/>
            </div>
            <ProfileModel modelOpend={modelOpend} setmodelOpend={setmodelOpend}/>
       </div>
       <div className="info">
           <span>
             <b>Status </b>
           </span>
           <span>In Relationship</span>
       </div>

       <div className="info">
           <span>
             <b>Lives in </b>
           </span>
           <span>Raipur</span>
       </div>
       <div className="info">
           <span>
             <b>Works at </b>
           </span>
           <span>TCS</span>
       </div>
       <button className='button logoout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
