import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../features/userSlice'
import { auth } from '../../firebase'
import './Login.css'

const linkedIn = 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png'

const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.profileURL,
                }))
            }).catch((err) => alert(err))
    }

    return (
        <div className='login'>
            <img src={linkedIn} alt=''/>
            <form>
                <input value={email}  placeholder='Email' type='email' onChange={e=> setEmail(e.target.value)}/>
                <input value={password} placeholder='Password' type='password' onChange={e=> setPassword(e.target.value)}/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member?
                <Link to='/register'>
                    <span className='login__register'> Register Now </span>
                </Link>
            </p>
        </div>
    )
}

export default Login
