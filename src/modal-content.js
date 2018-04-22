import React, { Component } from "react";
import { UserConsumer } from "./user-context";
import { UiConsumer } from "./ui-context";

class ModalContent extends Component {
  render() {
    return (
      <UiConsumer>
        {theme => (
          <UserConsumer>
            {user => (
              <div
                onClick={theme.toggleModal}
                className="modal"
                style={
                  // theme.state.modal ? { display: "flex" } : { display: "none" }
                  theme.state.modal
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                <div id="modal-content">
                  <h3 style={{ color: theme.state.color }}>
                    {user.state.name}'s Modal
                  </h3>
                  <button
                    onClick={e => {
                      user.changeNameToBill(e);
                      e.stopPropagation();
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>
            )}
          </UserConsumer>
        )}
      </UiConsumer>
    );
  }
}

export default ModalContent;
