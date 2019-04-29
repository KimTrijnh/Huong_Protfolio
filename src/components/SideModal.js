import React, { Component } from "react";
import Modal from "react-modal";
import "./Modals.css";
import ProjectContainer from "./ProjectContainer";

export default class SideModal extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    let isOpen = !this.state.modalIsOpen
    console.log(isOpen)
      this.setState({ modalIsOpen: isOpen})
  }

  
  render() {
    return (
      <div>
        <button
          type="button"
          className="side-btn btn btn-primary"
          onClick={this.toggleModal}
        >
          <span>PROJECT</span>
        </button>      
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
        <div className="modal-content bg-transparent text-white pt-5">
        <button className="btn-exit" onClick={this.toggleModal}>
        <i className="tim-icons icon-simple-remove"></i></button>
        <h2 className="text-center text-white">My Projects</h2>
        <ProjectContainer projects={this.state.projects} />
        </div>        
        </Modal>
      </div>
    );
  }
}
