import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="post__body">
                    <p>{message}</p>
                </div>
        </div>
    )
}

export default Post
