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
    this.handleSend = this.handleSend.bind(this)
  }

  toggleContact() {
    this.setState({ modalContact: !this.state.modalContact });
  }

  handleSend = event => {
    event.preventDefault()
    this.setState({ modalContact: !this.state.modalContact });
    alert('Thank You. I’ll get back to you as soon as possible ')

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
          <div className="bg-text" style={{ height: "auto" }}>
            <Typist cursor={Cursor}>
              <h1 className="display-1">Hi, I'm Huong</h1>
              <p className="lead text-lg">Full Stack Web Developer</p>
              <div className="bg-blur lead text-md p-3 text-light my-2">
               <q>First, solve the problem. Then, write the code.</q>
               <br/> 
               <small className="text-muted">— John Johnson</small>
              </div>
              <button
              className="btn btn-primary"
              onClick={this.toggleModal}
            >
              My Projects
            </button>
            </Typist>
            
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
            handleSend={this.handleSend}
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
