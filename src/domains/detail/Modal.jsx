import React from "react";
import "./Modal.css"; // Example CSS for modal styling

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
