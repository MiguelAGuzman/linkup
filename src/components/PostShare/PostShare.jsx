import React from 'react';
import ProfileImage from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";


const PostShare = () => {
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt=""/>
        <div>
            <input type="text" placeholder="What's Happening?"/>
        </div>
        <div className="postOptions">
            <div className="option">
                <UilScenery/>
            </div>
            <div className="option">
                <UilPlayCircle/>
            </div>
            <div className="option">
                <UilLocationPoint/>
            </div>
            <div className="option">
                <UilSchedule/>
            </div>
        </div>
    </div>
  )
}

export default PostShare