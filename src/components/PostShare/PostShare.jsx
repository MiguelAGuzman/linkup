import React from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import { UilScenery } from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt=""/>
        <div>
            <input type="text" placeholder="What's Happening?"/>
        </div>
        <div className="postOptions">

        </div>
    </div>
  )
}

export default PostShare