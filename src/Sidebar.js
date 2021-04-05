import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">

        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="bg"/>
            <Avatar className="sidebar__avatar" src="" alt="me" />
            <h2>Govind B Chandran</h2>
            <h4>govindchandran150@gmail.com</h4>
            <h4>React Developer</h4>
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
