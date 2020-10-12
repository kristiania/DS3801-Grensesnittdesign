import React from 'react';

// import './button.css'

// Props - Arvede variabler eller funskjoner gitt av en forelder klasse/komponent
const Button = (props) => (
    <button 
        className={props.className}
        onClick={props.onClick}
    >
        {props.title}
    </button>
);

export default Button;