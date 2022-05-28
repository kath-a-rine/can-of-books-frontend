import React from 'react';
import { Button } from 'react-bootstrap';

class DeleteButton extends React.Component {
  render() {
    return (
      <>
        <Button
          type="button"
          onClick={() => { this.props.deleteBookHandler(this.props.id) }}
        ></Button>
      </>
    )
  }
}

export default DeleteButton;