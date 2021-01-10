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
            <h1 className="text-blue">Hello, welcome to my resume.</h1>
            <div className="text-center" style={{ minHeight: "450px" }}>
              <img
                className="img-fluid"
                src="/img/mypic.jpg"
                alt="myself"
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
                Address: Binh Trung Tay Ward, District 2, Ho Chi Minh City,
                Vietnam
              </li>
              <li className="my-3">
                <i class="fab fa-github mr-2" />{" "}
                <a href="https://github.com/KimTrijnh">My github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row py-4 border-bottom px-2">
          {/* ojective */}
          <div className="col-md-12 col-sm-12 my-3 pr-5">
            <h3 className="display-4 text-blue">Objective:</h3>
            <div className="lead text-md">
              Used to be an Engineer, a Researcher and a Technical Sales in
              Chemical Industry but I found coding as my passion and love to
              become a developer. Seeking for a backend web developer position
              in an exciting and innovative company that offers room for
              progression.
            </div>
          </div>
          {/* skills */}
          <div className="col-md-12 col-sm-12 lead text-md my-3">
            <h3>
              <strong className="display-4 text-blue">Skills</strong>
            </h3>

            <div className="row">
              {/* technical skills */}
              <div className="col-md-6 col-sm-12">
                <h4>
                  <strong className="display-5 text-blue">
                    Technical Skills
                  </strong>
                </h4>
                <div className="row">
                  <strong className="col-4">Front-end</strong> HTML, CSS,
                  Bootstrap, JS, ReactJS
                </div>
                <div className="row">
                  <strong className="col-4">Back-end</strong> Ruby on Rails, Python, Flask, SQL
                </div>

                <div className="row">
                  <strong className="col-4">Others </strong> XD Design
                </div>
                <div className="row">
                  <strong className="col-4">Source control system</strong> Git
                </div>
              </div>
              {/* solf skills */}
              <div className="col-md-6 col-sm-12 mt-4 ">
                <h4>
                  <strong className="display-5 text-blue">Solf Skills</strong>
                </h4>
                <div className="row pl-3">Good individual and team working</div>
                <div className="row pl-3">Strong product mindset</div>
                <div className="row pl-3">
                  Learn fast and self-study ability
                </div>
                <div className="row pl-3">High responsibility</div>
                <div className="row pl-3">Proactive</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom py-4 text-md lead px-2">
          <h3>
            <strong className="display-4 text-blue">Education:</strong>
          </h3>
          <div className="row mt-3">
            <strong className="col-md-2 col-sm-3">
              2/2019 – 5/2019:
            </strong>{" "}
            <span>
            Full-stack Web Development Course - Coder School, HCM <br />
            1st place winner of Demo Day - <a href="https://project-charity-platform.netlify.app/">Charity platform</a>
            </span>
          </div>
          <div className="row mt-3">
            <strong className="col-md-2 col-sm-3">1/2016 – 9/2018:</strong>{" "}
            Master by Research in Chemical Engineering, University Technology
            Petronas, Malaysia
          </div>
          <div className="row mt-3">
            <strong className="col-md-2 col-sm-3">2005 – 2010:</strong> Bachelor
            of Chemical Engineering, Ho Chi Minh City Bach Khoa University
          </div>
        </div>
        <div className="py-4 text-md lead">
          <h3>
            <strong className="display-4 text-blue">Working Experience</strong>
          </h3>
          <div className="row mt-3">
            <div className="col-12 my-2">
              <strong className="col-md-2 col-sm-3">7/2019 – Present: </strong>{" "}
              Ruby on Rails Backend Developer at <a href="https://employmenthero.com/">Employment Hero</a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 my-2">
              <strong className="col-md-2 col-sm-3">2010 – 2018: </strong>{" "}
              Working in Chemical Industry
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AboutModal;
