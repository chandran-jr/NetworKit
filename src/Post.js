import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from './InputOption';
import './Post.css';

const Post = forwardRef(({name, description, message, photoUrl}) => {
    
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                    <p>{message}</p>
                </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="#70B5F9" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="#47d147" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="#ffa31a" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="salmon" />
            </div>

        </div>
    )
}
)

export default Post
