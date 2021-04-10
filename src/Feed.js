import CreateIcon from '@material-ui/icons/Create';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ImageIcon from '@material-ui/icons/Image';
import React from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">

            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input placeholder="Start a post" type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>

                    <div className="feed__inputOptions">
                        <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                        <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                        <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                        <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />

                    </div>

            </div>

            <div className="feed__post">
                <Post name="Govind Chandran" description="React developer" message="LinkedIn clone!!"  />
            </div>
            
        </div>
    )
}

export default Feed;
