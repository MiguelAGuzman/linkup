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

        <Login/>
    </div>
  )
}

function Login() {

    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Login</h3>

                <div>
                    <input
                    type="text"
                    className="infoInput" 
                    placeholder='Username'
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
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account? Sign Up.</span>
                </div>
                <button className="button infoButton" type='submit'>Login</button>
            </form>
        </div>
    )
}

function SignUp() {

    return (
        <div className="a-right">
            <form className="infoForm authForm">
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
                    placeholder='Username'
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
                    <span style={{fontSize: '12px'}}>Already have an account? Login.</span>
                </div>
                <button className="button infoButton" type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Auth