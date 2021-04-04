import React from 'react';
import './HeaderOption.css';

function HeaderOption({Icon, title}) {
    return (
        <div classname="headerOption">
            {Icon && <Icon classname="headerOption__icon"/>}
            <h3 classname="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
