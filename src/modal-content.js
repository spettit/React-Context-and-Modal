import React from 'react';
import { UserConsumer } from './user-context';
import { ThemeConsumer } from './theme-context';

const ModalContent = props => {

  return (
    <ThemeConsumer>
      {theme => (
        <UserConsumer>
          {user => (
            <div className='modal'>
              <div id = 'modal-content'>
              <h3>{user.state.name}'s Modal</h3>
            </div>
            </div>
          )}
        </UserConsumer>
      )}

    </ThemeConsumer>
  );
};

export default ModalContent
