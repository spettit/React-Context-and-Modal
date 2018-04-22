import React, { Component } from "react";
import { UserConsumer } from "./user-context";
import { UiConsumer } from "./ui-context";

class ModalContent2 extends Component {
  render() {
    return (
      <UiConsumer>
        {theme => (
          <UserConsumer>
            {user => (
              <div
                onClick={theme.toggleModal2}
                className="modal"
                style={
                  // theme.state.modal ? { display: "flex" } : { display: "none" }
                  theme.state.modal2
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                <div id="modal-content">
                  <h3 style={{ color: theme.state.color }}>HELLO</h3>
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

export default ModalContent2;
