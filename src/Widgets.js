import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__left">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets__right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>NetworKit News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Chandran launches NetworKit", "The web app has no potential whatsover😪")}
            {newsArticle("Covid-19 increases", "Indian condition severe as cases rise rapidly☠")}
            {newsArticle("Doge hits ATH", "Elon tweet boosts the coin yet again😳")}
            {newsArticle("Neuralink making progress", "Monkey learns to play video games using neurachip😎")}
        </div>
    )
}

export default Widgets
