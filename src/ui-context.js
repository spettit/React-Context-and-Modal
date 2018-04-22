import React from "react";

const UiContext = React.createContext();

export const UiConsumer = UiContext.Consumer;

export class UiProvider extends React.Component {
  state = {
    color: "white",
    backgroundColor: "red",
    margin: "0 200px",
    modal: false,
    modal2: true
  };

  changeTheme = () =>
    this.setState(
      this.state.backgroundColor === "red"
        ? { backgroundColor: "green", color: "yellow" }
        : { backgroundColor: "red", color: "white" }
    );

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggleModal2 = () => {
    this.setState({ modal2: !this.state.modal2 });
  };

  render() {
    return (
      <UiContext.Provider
        value={{
          state: this.state,
          changeTheme: this.changeTheme,
          toggleModal: this.toggleModal,
          toggleModal2: this.toggleModal2
        }}
      >
        {this.props.children}
      </UiContext.Provider>
    );
  }
}
