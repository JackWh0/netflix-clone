import React from 'react';
import '../styles/Header.css';

export default function Header({ black }) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png" alt="logo" />
                </a>
            </div>
            <div className="header--user">
                <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="user" />
            </div>
        </header>
    );
}