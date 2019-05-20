import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";
import "./main.css"

export default class ContactModal extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalContact}>
          <Card  className="m-0 py-2 px-3">
            <ModalHeader
              className="justify-content-center"
              toggle={this.props.toggleContact}
            >
            <h3 className="text-white">Contact Me</h3>   
            </ModalHeader>
            <div className="text-center">Please leave me a message and your email if you are interested in my profile, I’ll get back to you as soon as possible</div>
            <CardBody>
              <Form action="mailto:trinhhoaihuong@gmail.com" method="post" enctype="text/plain">
        
                <FormGroup>
                  <Label for="email" className="text-white">Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="content" className="text-white">Your message</Label>
                  <Input type="textarea" name="text" id="content" required/>
                </FormGroup>
                <Button color="primary" type="submit" >
                  Send
                </Button>
                <Button color="success" type="reset" onClick={this.props.toggleContact}>
                  Cancel
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Modal>
      </div>
    );
  }
}
