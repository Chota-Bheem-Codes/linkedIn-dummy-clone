import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css'

const HeaderOption = ({ alt, avatar, Icon, title, onClick }) => {
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon'/>}
            {alt && (<Avatar className='headerOption__icon' src={avatar}>{alt}</Avatar>)}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
