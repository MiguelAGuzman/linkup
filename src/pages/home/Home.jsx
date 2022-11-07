import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <div className="rightSide">Rightside</div>

    </div>
  )
}

export default Home