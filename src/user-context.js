import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends React.Component {
  state = {
    name: "Sean",
    age: 53
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(json => this.setState({ name: json.name }));
  }

  growAYearOlder = () =>
    this.setState(
      {
        age: this.state.age + 1
      },
      console.log("done")
    );

  asyncGrowAYearOlder = () => {
    console.log("clicked");
    setTimeout(this.growAYearOlder, 2000);
  };

  changeNameToBill = () => {
    this.setState(
      this.state.name === "Sean" ? { name: "Bill" } : { name: "Sean" }
    );
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          growAYearOlder: this.asyncGrowAYearOlder,
          changeNameToBill: this.changeNameToBill
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
