import React, { Component } from "react";
import Modal from "react-modal";
import "./Modals.css";
import ProjectContainer from "./ProjectContainer";

export default class SideModal extends Component {
  constructor() {
    super();
    this.state = {
      propjects: []
    };
  }

  //   this.toggleModal = this.toggleModal.bind(this)
  // }

  // toggleModal() {
  //   let isOpen = !this.state.modalIsOpen
  //   console.log(isOpen)
  //     this.setState({ modalIsOpen: isOpen})
  // }

  
  render() {
    return (
      <div>
        <div className="row">
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal col-md-3 col-sm-12"
          overlayClassName="Overlay"
        >
        <div className="modal-content bg-transparent text-white pt-5">
        <button className="btn-exit" onClick={this.props.toggleModal}>
        <i className="tim-icons icon-simple-remove"></i></button>
        <h2 className="text-center text-white">My Projects</h2>
        <ProjectContainer projects={this.state.projects} />
        </div>        
        </Modal>
        </div>      
        
      </div>
    );
  }
}
