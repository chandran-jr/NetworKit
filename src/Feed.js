import CreateIcon from '@material-ui/icons/Create';
import React from 'react';
import './Feed.css';

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
            </div>
            
        </div>
    )
}

export default Feed
