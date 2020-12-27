import React, { useState } from 'react'
import './RegisterScreen.css'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

const linkedIn = 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png'

const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [profilePic,setProfilePic] = useState('')

    
    const register = (e) => {
        e.preventDefault()
        if(!name){
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                }).then(()=>
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    }))
                )
            }).catch(error => alert(error));
    }


    return (
        <div className='register'>
            <div className='register__header'>
                <img src={linkedIn} alt=''/>
                <Link to='/login'>
                    <button>Sign In</button>
                </Link>
            </div>
            <div className='register__body'>
                <form>
                    <h1>Welcome to your<br/>professional community</h1>
                    <input vlaue={name} placeholder='Full Name' type='text' onChange={e=> setName(e.target.value)}/>
                    <input value={profilePic} placeholder='Display Picture URL' type='text' onChange={e=> setProfilePic(e.target.value)}/>
                    <input value={email}  placeholder='Email' type='email' onChange={e=> setEmail(e.target.value)}/>
                    <input value={password} placeholder='Password' type='password' onChange={e=> setPassword(e.target.value)}/>
                    <button type='submit' onClick={register}>Register</button>
                </form>
                <img src='register-front.svg' alt=''/>
            </div>
        </div>
    )
}

export default RegisterScreen
