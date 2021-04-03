import React from 'react';
import './HeaderOption.css';

function HeaderOption({Icon, title}) {
    return (
        <div classname="headerOption">
            {title}
        </div>
    )
}

export default HeaderOption
