import React from 'react';
import "../atomos/styles/BackButton.css";


function BackButton() {
  return (
    <a className="back-button">
     <img src='public/flecha atras.svg' className='back-button-icon' alt="" />
    </a>
  );
}

export default BackButton;
