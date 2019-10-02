import ReactDOM from "react-dom";
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Private from "./Private";
import Public from "./Public";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Contact from "./Contact";
import SubmitForm from "./SubmitForm";
import BestModal from "./BestModal";

import {
  Button,
  ButtonToolbar,
  Form,
  FormControl,
  Card,
  Carousel,
  Modal
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      setIndex: 0,
      direction: null,
      setDirection: null,
      showModal: false
    };
  }

  async conponentDidMount() {}
  conponentDidUpdate() {}
  conponentWillUnmount() {}

  closeModal = () => {
    this.setState(() => ({
      showModal: false
    }));
  };

  setModalShow = () => {
    this.setState(() => ({ showModal: true }));
  };

  ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(true);
    return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
    );
  };

  render() {
    return (
      <div>
        <Navbar />
        <div class="container joncenter">
          <div class="altrow">
            <MainContent />
          </div>
          <div class="altrow">
            <Public />
          </div>
          <div class="altrow">
            <Private />
          </div>
          <div class="altrow">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};
