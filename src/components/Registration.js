import React , {useState} from 'react'
import '../css/registration.css'
import logo from '../assets/left-img.svg'
import avatar from '../assets/male-avatar.svg'
const Registration = (props) => {
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
                        <h3 class="main-heading">Registration Form</h3>
                        <div class="credentials" id="credentials">
                            <div class="username-container">
                                <label for="userName" class="Label">Username</label>
                                <input type="text" id="userName"></input>
                            </div>
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
                            <span>Already have an account ?</span>
                            <span><a href="#">Log in</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;