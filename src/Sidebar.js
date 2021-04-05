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

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    3646
                </p>
            </div>

            <div className="sidebar__stat">
            <p>Views on posts</p>
                <p className="sidebar__statNumber">
                    10,336
                </p>
            </div>
        </div>

        
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
            
        </div>
    )
}

export default Sidebar
