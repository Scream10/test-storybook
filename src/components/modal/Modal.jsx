import React from "react";
import PropTypes from 'prop-types';
import "./Modal.css"

export const Modal = ({ text, buttonText, onClick, backgroundColor, ...props }) => {
  return (
    <div className="modal" {...props}>
      <div className="modal__text">{text}</div>
      <button 
        className="modal__button" 
        onClick={onClick}
        style={backgroundColor && { backgroundColor }}
      >
        {buttonText}
      </button>
    </div>
  )
};

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

Modal.defaultProps = {
  onClick: () => {console.log("Click")},
  backgroundColor: null
};