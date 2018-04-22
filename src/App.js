import React, { Component } from "react";
import "./App.css";

import { UserProvider } from "./user-context";
import { UiProvider } from "./ui-context";

import Group from "./group";

import Portal from "./portal";
import ModalContent from "./modal-content";

class App extends Component {
  render() {
    return (
      <UiProvider>
        <UserProvider>
          <div className="App">
            <Group />
          </div>
          <Portal>
            <ModalContent />
          </Portal>
        </UserProvider>
      </UiProvider>
    );
  }
}

export default App;
