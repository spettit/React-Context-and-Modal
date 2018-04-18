import React from "react";
import Person from "./person";
import { ThemeConsumer } from "./theme-context";

const Group = () => {
  return (
    <ThemeConsumer>
      {theme => (
        <div>
          <h1 style={theme.state}>Details</h1>
          <Person />
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Group;
