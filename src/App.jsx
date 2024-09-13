import './App.css';
import React, { Component } from "react";
import ModalForm from './components/modal/modal.jsx';
import { FormCloseBtn } from './components/modal/modal.styled.js';

class App extends Component {
  state = {
    isOpen: false,
  }

  onOpen = () => {
    this.setState(prevState => {
      return ({ isOpen: true })
    })
  }

  onClose = () => {
    this.setState(prevState => {
      return ({ isOpen: false })
    })
  }
  render() {
    return (
      <>
        {this.state.isOpen || <button type='button' onClick={this.onOpen}>Close</button>}
        {this.state.isOpen && <ModalForm onClose={this.onClose}></ModalForm>}
      </>
    )
  }
}
export default App