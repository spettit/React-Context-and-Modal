import React from 'react';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer

export class UserProvider extends React.Component {
  state={
    name: 'Sean',
    age: 53,
  }

  growAYearOlder = () =>
    this.setState({
      age: this.state.age + 1
    }, console.log('done'))

  asyncGrowAYearOlder = () => {
    console.log('clicked');
    setTimeout(this.growAYearOlder, 2000);
  }

    render() {
      return (
        <UserContext.Provider
          value = {{
            state: this.state,
            growAYearOlder: this.asyncGrowAYearOlder
          }}
          >
            {this.props.children}
          </UserContext.Provider>
      )
    }
}
