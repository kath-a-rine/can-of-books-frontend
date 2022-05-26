import React from 'react';
import { Modal, Button, Form, ModalBody, ModalFooter } from 'react-bootstrap';

class BookFormModal extends React.Component {
  render() {
    return(
      <>
      <Modal 
        show={this.props.modalDisplayStatus}
        onHide={this.props.closeModalHandler}
      >
      <Modal.Header>
        <Modal.Title>Add a book to our list!</Modal.Title>
      </Modal.Header>
      <ModalBody>
      <Form onSubmit={this.props.submitFormHandler}>
            <Form.Group controlId="bookTitle">
              <Form.Label>Book Title: </Form.Label>
                <Form.Control type="text" placeholder="e.g. Charlotte's Web" />
            </Form.Group>
            <Form.Group controlId="bookDescription">
              <Form.Label>Book Description: </Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="hasRead">
                <Form.Check type="checkbox" label="I have read this book" ></Form.Check>
            </Form.Group>
            <Button type="submit" variant="info" onClick={this.props.closeModalHandler}>Submit</Button>
          </Form>
      </ModalBody>
      <ModalFooter>

      </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default BookFormModal;