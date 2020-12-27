import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading';
import './LoadingScreen.css'

const LoadingScreen = () => {

    const [load,setLoad] = useState(true)

    useEffect(() => {
        setTimeout(()=>setLoad(false),1000)
    },[])

    return (
        <div className='loader'>
            {load?
                <ReactLoading type='balls' color='lightblue' height={667} width={375}/>:
                <Redirect to='/register'/>}   
        </div>
    )
}

export default LoadingScreen