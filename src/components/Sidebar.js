import React from 'react';
import profileImage from '../img/profile_pic3.PNG';

function Sidebar() {
    return (
        <div className="menu">
            <div className="profilePic">
                <img src={profileImage} alt={"profile"}></img>
            </div>
            <div className="name">
                <h1>Luke Rowell</h1>
            </div>
            <div className="bio">
                <p>Programmer and mathematics enthusiast.</p>
            </div>
        </div>
    );
}

export default Sidebar;