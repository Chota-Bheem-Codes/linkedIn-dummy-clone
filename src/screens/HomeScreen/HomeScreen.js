import React from 'react'
import './HomeScreen.css'
import Feed from '../../components/Feed/Feed'
import Header from '../../components/Header/Header'
import Widgets from '../../components/Widgets/Widgets'
import Sidebar from '../../components/Sidebar/Sidebar'

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Header/>
            <div className="homeScreen__body">
                <Sidebar/>
                <Feed/>
                <Widgets/>
            </div>  
        </div>
    )
}

export default HomeScreen
