import React from 'react';
import './style.css';

const GrayImage = (props) => {
    return (
        <img className="gray-img" src={props.img_url}></img>
    );
};

export default GrayImage;


