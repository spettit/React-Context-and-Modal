import React, { Component } from "react";
import "./App.css";

import { UserProvider } from "./user-context";
import { ThemeProvider } from "./theme-context";

import Group from "./group";

import Modal from "./modal";
import ModalContent from "./modal-content";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <UserProvider>
          <div className="App">
            <Group />
          </div>
          <Modal>
            <ModalContent />
          </Modal>
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default App;
