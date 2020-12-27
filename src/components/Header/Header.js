import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HeaderOption from '../HeaderOption/HeaderOption'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

const linkedInLogo = "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"


const Header = () => {

    const user = useSelector(selectUser)

    const dispatch = useDispatch(); 

    const logoutOfApp = () => {
        dispatch(logout());

        auth.signOut();
    }

    return (
        <div className="header">

            <div className="header__left">
                <img src={linkedInLogo} alt=""/>
            </div>
            <div className="header__search">
                <SearchIcon/><input placeholder="Search" type="text"/>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={user?.photoURL} alt={user?.email[0]} title='me' onClick={logoutOfApp}/>
            </div>
            
        </div>
    )
}

export default Header