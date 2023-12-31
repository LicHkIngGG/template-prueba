import React from 'react';
import "./styles/SuccessMessage.css";

function SuccessMessage({ message }) {
  return (
    <div className="success-message">
      <p>{message}</p>
    </div>
  );
}

export default SuccessMessage;
