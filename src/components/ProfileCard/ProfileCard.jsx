import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'


const ProfileCard = () => {



    const profilePage = true;
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
                <span>lily</span>
                <span>frontend developer</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>456</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>followers</span>
                </div>
                {profilePage && [
                    <>
                      <div className="vl">
                           
                      </div>
                      <div className="follow">
                         <span>3</span>
                         <span>Posts</span>
                      </div>
                    </>
                ]}
            </div>
            <hr />
        </div>
        {profilePage ?'':[
             <span>
             My profile
            </span>
        ]}
        
        
    </div>
  )
}

export default ProfileCard;
