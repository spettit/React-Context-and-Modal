import React from 'react';
import { UserConsumer } from './user-context';
import { ThemeConsumer } from './theme-context';

const Person = props => {
  return (
    <ThemeConsumer>
      {theme => (
        <UserConsumer>
          {user => (
            <React.Fragment>
              <h3>{user.state.name}</h3>
              <p style={theme.state}>I'm the age: {user.state.age}</p>
              <button onClick={user.growAYearOlder}>click</button>
              <button onClick={theme.changeTheme}>theme</button>
            </React.Fragment>
          )}
        </UserConsumer>
      )}

    </ThemeConsumer>
  );
};

export default Person
