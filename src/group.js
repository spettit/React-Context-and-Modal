import React from "react";
import Person from "./person";
import { UiConsumer } from "./ui-context";

const Group = () => {
  return (
    <UiConsumer>
      {theme => (
        <div>
          <h1 style={theme.state}>Details</h1>
          <Person />
        </div>
      )}
    </UiConsumer>
  );
};

export default Group;
