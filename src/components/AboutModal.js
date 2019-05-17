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
      <div className="container px-2">
        <div className="row d-flex align-items-center border-bottom py-4">
          <div className="col-sm-12 col-md-6 my-3">
            <h1 className="text-blue">
            Hello, welcome to my resume.
            </h1>
            <div className="text-center">
              <img
                className="img-fluid"
                src="/img/mypic.jpg"
                alt="my photo"
                width="300px"
              />
            </div>
          </div>
          <div className="lead text-md col-sm-12 col-md-6 my-3">
            <ul className="list-unstyled">
              <li>Trinh Thi Hoai Huong</li>
              <li>Gender: Female</li>
              <li>Email: trinhhoaihuong@gmail.com</li>
              <li>Tel: 0915.395.609</li>
              <li>
                Address: Binh Trung Tay Ward, District 2, Ho Chi Minh City, Vietnam
              </li>
            </ul>
          </div>
         
        </div>
        <div className="row py-4 border-bottom">
        <div className="col-md-6 col-sm-12 my-3 pr-5">
          <h3 className="display-4 text-blue">Objective:</h3>
          <div className="lead text-md">
            Used to be an Engineer, a Researcher and a Technical Sales in
            Chemical Industry but I found coding as my passion and love to
            become a developer. Seeking for a frontend web developer
            position in an exciting and innovative company that offers room for
            progression.
          </div>
        </div>
        <div className="col-md-6 col-sm-12 lead text-md my-3">
          <h3>
            <strong className="display-4 text-blue">Skills</strong>
          </h3>
          <div className="row">
            <strong className="col-4">Front-end</strong> HTML, CSS, Bootstrap, JS, ReactJS
          </div>
          <div className="row">
            <strong className="col-4">Back-end</strong> Python, Flask, SQL
          </div>
          <div className="row">
            <strong className="col-4">Others</strong> Git, XD Design
          </div>
          <div className="row">
            <strong className="col-4">Foreign Language </strong> English (TOEIC-925)
          </div>
        </div>
        </div>
        <div className="border-bottom py-4 text-md lead px-2">
          <h3>
            <strong className="display-4 text-blue">Education:</strong>
          </h3>
          <div className="row mt-3">
              <strong className="col-md-2 col-sm-3">1/2016 – 9/2018:</strong> Master by Research in Chemical Engineering, University Technology Petronas, Malaysia
          </div>
          <div className="row mt-3">
              <strong className="col-md-2 col-sm-3">2005 – 2010:</strong> Bachelor of Chemical Engineering, Ho Chi Minh City Bach Khoa University
            
          </div>
        </div>
        <div className="py-4 text-md lead">
          <h3>
            <strong className="display-4 text-blue">Working Experience</strong>
          </h3>
          <div className="row mt-3">
             <div className="col-12 my-2">
             <strong className="col-md-2 col-sm-3">01/2016 – 6/2018: </strong> Graduate Assistant, Biomass processing lab, University Technology Petronas, Malaysia
             </div>
            <div className="col-12">
              Doing research activities in biodiesel field (2 published papers).
              Giving lab tutorials to undergraduates. Having experience in
              operating high tech equipments of material analysis
            </div>
          </div>
          <div className="row mt-3">
          <div className="col-12 my-2">
          <strong className="col-md-2 col-sm-3">05/2012 – 10/2013: </strong> Telesales, Mettler-Toledo
              Vietnam, HCMC
            </div>
            <div className="col-12">
              Selling pH meter, Titrator and Lab balance. Making calls to
              support customers and gather information. Running email campaigns
              to promote existing products and launch new products.
            </div>
          </div>
          <div className="row mt-3">
          <div className="col-12 mt-2">
          <strong className="col-md-2 col-sm-3">2010 – 2012: </strong> QC staff, Rohto Mentholatum
              Vietnam, Binh Duong Factory
          </div>
            <div className="col-12">
              Sampling and testing raw material. Organizing testing files,
              chemicals and equipment of raw material session. Having knowledge
              of GMP & GLP.
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AboutModal;
