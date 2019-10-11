import React from 'react';

function ProjectEntry(props) {
    let classString;
    const linkText = props.isDemo ? "DEMO" : "LIVE";

    if (props.isDemo) {
        classString = "demoButton";
    } else {
        props.isLive ? classString = "liveButton" : classString = "liveDisabledButton";
    }

    return (
        <div className="projectEntry">    
            <div className="picture">
                <img src={require(`../img/${props.imgName}`)} alt={props.name}/>
            </div>
            <div className="filler"></div>
            <div className="description">
                <p>
                    <h3>{props.name}</h3>
                    {props.description}
                </p>
            </div>
            <div className="buttons">
                <a href={props.liveLink} className={classString}>{linkText}</a>
                <a href={props.codeLink} className="codeButton">CODE</a>                
            </div>
        </div>
    );
}

export default ProjectEntry;