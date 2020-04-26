import React from 'react';

import './Title.css';

const Title = ({ title, subtitle }) => (
    <div className="Container">
        <h1 className="Title">{title}</h1>
        <p className="Subtitle">{subtitle}</p>
    </div>
)

export default Title;