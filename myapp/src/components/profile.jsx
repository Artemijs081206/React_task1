import React, { useState } from 'react';

function Profile() {
    const [bgColor, setBgColor] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const colors = ['crimson', 'Tomato', 'DodgerBlue', 'MediumSeaGreen', 'Gold', 'DeepPink'];
    const [colorIndex, setColorIndex] = useState(-1);

    const sayHello = () => {
        alert('Hello, Artmijs Stanko!');
    };

    const showTime = () => {
        const now = new Date();
        setCurrentTime(`Current time: ${now.toLocaleString()}`);
    };

    return (
        <div style={{ backgroundColor: bgColor }}>
            <h1 id="main-heading">My Profile</h1>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8to2RFLlm6XPSeODI0_Rr-oxrR5QDO32kA&s" alt="Profile Photo" id="profile-pic" />

            <h2>My Hobbies</h2>
            <ul id="hobby-list">
                <li>Photography</li>
                <li>Traveling</li>
                <li>Coding</li>
                <li>Music</li>
            </ul>

            <div className="buttons">
                <button onClick={sayHello}>Say Hello</button>
                <button onClick={showTime}>Show Time</button>
            </div>

            <p>{currentTime}</p>

        </div>
    );
}

export default Profile;