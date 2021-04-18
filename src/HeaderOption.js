import React from 'react';
import './HeaderOption.css';
import {Avatar} from '@material-ui/core';

function HeaderOption({avatar, Icon, title, onClick}) {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={avatar} alt="profilepic" /> }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;
