import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">

        <div className="sidebar__top">
            <img src="" alt="bg"/>
            <Avatar className="sidebar__avatar" src="" alt="me" />
            <h2>Govind B Chandran</h2>
            <h4>Web Developer</h4>
        </div>

        
        <div className="sidebar__bottom">

        </div>
            
        </div>
    )
}

export default Sidebar
