import React from 'react';


import './custom-button.style.scss';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
    <button 
    className= {`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign ': ''} custom-button`}
    {...otherProps}>

         {children}
    </button>
);


export default CustomButton;

