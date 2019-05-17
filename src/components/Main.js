import React, { Component } from "react";
import SideModal from "./SideModal";
import Credit from "./Credit";
import ContactModal from "./ContactModal";
import NavbarTop from "./NavbarTop";
import AboutModal from "./AboutModal";
import Typist from "react-typist";
import "./main.css";

const Cursor = {
  show: true,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 500
};

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalContact: false,
      modalAbout: false,
      modalIsOpen: false
    };
    this.toggleContact = this.toggleContact.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleModal = this.toggleModal.bind(this)

  }

  toggleContact() {
    this.setState({ modalContact: !this.state.modalContact });
  }

  toggleAbout() {
    console.log("btn-contact click");

    this.setState({ modalAbout: !this.state.modalAbout });
  }

  toggleModal() {
      this.setState({ modalIsOpen: !this.state.modalIsOpen})
  }

  render() {
    return (
      <>
        <NavbarTop
          toggleContact={this.toggleContact}
          toggleAbout={this.toggleAbout}
        />
        <div className="main">
          <div className="bg-img" />
          <div className="bg-text" style={{ height: "200px" }}>
            <Typist cursor={Cursor}>
              <h1 className="display-1">Hi, I'm Huong</h1>
              <p className="lead text-lg">Full Stack Web Developer</p>
            </Typist>
            <button
              className="btn btn-primary"
              style={{ position: "absolute", bottom: 0 }}
              onClick={this.toggleModal}
            >
              My Projects
            </button>
          </div>

          <SideModal modalIsOpen={this.state.modalIsOpen} toggleModal={this.toggleModal}/>
          <button
          type="button"
          className="side-btn btn btn-primary"
          onClick={this.toggleModal}
        >
          <span>PROJECT</span>
        </button>
          <Credit />
          <ContactModal
            modalContact={this.state.modalContact}
            toggleContact={this.toggleContact}
          />
          <AboutModal
            modalAbout={this.state.modalAbout}
            toggleAbout={this.toggleAbout}
          />
        </div>
      </>
    );
  }
}
