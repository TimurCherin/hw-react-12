import './App.css';
import React, { Component } from "react";
import ModalForm from './components/modal/modal.jsx';

class App extends Component {
  state = {
    isOpen: false,
  }

  onOpen = () => {
    this.setState({ isOpen: true });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <>
        {this.state.isOpen || <button type='button' onClick={this.onOpen}>Open</button>}
        {this.state.isOpen && <ModalForm onClose={this.onClose}></ModalForm>}
      </>
    )
  }
}

export default App;