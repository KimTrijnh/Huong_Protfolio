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
      modalAbout: false
    };
    this.toggleContact = this.toggleContact.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleContact() {
    this.setState({ modalContact: !this.state.modalContact });
  }

  toggleAbout() {
    console.log("btn-contact click");

    this.setState({ modalAbout: !this.state.modalAbout });
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
          <Typist cursor={Cursor} >
            <div className="bg-text">
              <h1 className="display-1">Hi, I'm Huong</h1>
              <p className="lead text-lg">Full Stack Web Developer</p>
            </div>
          </Typist>

          <SideModal />
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
