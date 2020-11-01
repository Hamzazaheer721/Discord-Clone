import { Button } from '@material-ui/core'
import React from 'react'
import {auth, provider} from '../firebase/firebase'
import './Login.css'
function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(err => alert(err.message))
    }
    return (
        <div className = "login">
            <div className="login_logo">
                <img src="https://wallpaperaccess.com/full/765564.jpg" />
            </div>
            <Button onClick = {signIn}> Sign in</Button>
        </div>
    )
}

export default Login
