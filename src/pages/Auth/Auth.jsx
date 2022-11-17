import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt=""/>
            <div className="WebName">
                <h1>Linkup</h1>
                <h6>Explore ideas throughout the world</h6>
            </div>
        </div>

        <SignUp/>
    </div>
  )
}

function SignUp() {

    return (
        <div className="a-right">
            <form className="infoForm">
                <h3>Sign Up</h3>

                <div>
                    <input type="text" placeholder='First Name'
                    className='infoInput' name='firstname'/>
                </div>
            </form>
        </div>
    )
}

export default Auth