
import React from 'react'
import './FollowersCard.css'
import { Follower } from '../../data/FollowersData'

const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
        <h3>Who is Following you</h3>

        {Follower.map((Follower,id)=>{
           return(
           <div className="Follower"> 
              <div>
                <img src={Follower.img} className="followerImg" alt="" />
                <div className="name">
                   <span>{Follower.name}</span>
                   <span>@{Follower.username}</span>
                </div>
              </div>
              <button className='button fc-button'>Follow</button>
           </div>
           );
        })}

        
    </div>
  )
}

export default FollowersCard
