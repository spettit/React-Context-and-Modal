import React from "react";
import { UserConsumer } from "./user-context";
import { UiConsumer } from "./ui-context";

const Person = props => {
  return (
    <UiConsumer>
      {theme => (
        <UserConsumer>
          {user => (
            <React.Fragment>
              <h3>{user.state.name}</h3>
              <p style={theme.state}>I'm the age: {user.state.age}</p>
              <button onClick={user.growAYearOlder}>click</button>
              <button onClick={theme.changeTheme}>theme</button>
              <button onClick={theme.toggleModal}>modal</button>
            </React.Fragment>
          )}
        </UserConsumer>
      )}
    </UiConsumer>
  );
};

export default Person;
