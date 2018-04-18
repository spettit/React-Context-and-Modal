import React from "react";

const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends React.Component {
  state = {
    color: 'white',
    backgroundColor: "red",
    margin: '0 200px'
  };

  changeTheme = () =>
    this.setState(
      this.state.backgroundColor === "red" ? { backgroundColor: "green" } : { backgroundColor: "red" },
      console.log(this.state.backgroundColor)
    );

  render() {
    return (
      <ThemeContext.Provider
        value={{
          state: this.state,
          changeTheme: this.changeTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
