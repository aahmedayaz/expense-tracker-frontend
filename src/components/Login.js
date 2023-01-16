import React , {useState} from 'react'
import '../css/login.css'
import logo from '../assets/right-img.svg'
import avatar from '../assets/male-avatar.svg'
 
const Login = (props) => {
    const [user, setuser] = useState({
        name : '' ,
        email : '' ,
        password : ''
    })

    return(
        <>
            <div class="main-container" id="main-container">
                <div class="left-panel" id="left-panel">
                    <img src={logo} alt=""></img>
                </div>
                <div class="right-panel" id="right-panel">
                    <div class="container">
                        <img src={avatar}></img>
                        <h3 class="main-heading">Login Form</h3>
                        <div class="credentials" id="credentials">
                            <div class="email-container">
                                <label for="email" class="Label">Email</label>
                                <input type="email" id="email"></input>
                            </div>
                            <div class="pin-container">
                                <label for="pin" class="Label">password</label>
                                <input type="password" id="pin"></input>
                            </div>
                        </div>
                        <button class="submit" id="submit">Submit</button>
                        <div class="sign-up">
                            <span>Don't have an Account ?</span>
                            <span><a href="#">Create One</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;