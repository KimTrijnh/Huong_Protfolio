import React from "react";
import Modal from "react-modal";
import "./Modals.css";

const AboutModal = props => {
  return (
    <Modal
      isOpen={props.modalAbout}
      contentLabel="Example Modal"
      className="AboutModal"
      overlayClassName="OverlayAboutModal"
    >
      <div className="mx-5 h-100 d-flex align-items-center">
      <div className="row d-flex justify-content-center">
      <h1 className="display-3 col-sm-8 col-md-3">Hello, My name is Huong.</h1>
          <p className="lead text-md col-sm-8 col-md-3 my-2">
          I used to be a Chemical Engineer, but found my
          passion for coding and decided to dedicate my time to learn and
          practice programing. My aim is to become a full stack web developer.
        </p>
        <div className="col-sm-8 col-md-3 mt-2">
          <strong className="display-4">Skills:</strong> 
          <p className="lead text-md">HTML, CSS, Bootstrap, JS, ReactJS</p>
          <p className="lead text-md">Python, Flask, SQL</p>
          <p className="lead text-md">Git, XD Design</p> 
        </div>
      </div>
        
      </div>
    </Modal>
  );
};

export default AboutModal;
