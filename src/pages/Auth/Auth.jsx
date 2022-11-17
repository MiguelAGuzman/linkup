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
                    <input 
                    type="text" 
                    placeholder='First Name'
                    className='infoInput' 
                    name='firstname'
                    />
                    <input 
                    type="text" 
                    placeholder='Last Name'
                    className='infoInput' 
                    name='lastname'
                    />
                </div>

                <div>
                    <input
                    type="text"
                    className="infoInput" 
                    placeholder='Usernames'
                    name='username'
                    />
                </div>

                <div>
                    <input 
                    type="text" 
                    className="infoInput" 
                    placeholder='Password'
                    name='password'
                    />
                    <input 
                    type="text" 
                    className="infoInput" 
                    placeholder='Confirm Password'
                    name='confirmpass'
                    />
                </div>

                <div>
                    <span>Already have an account? Login.</span>
                </div>
                <button className="button infoButton" type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Auth