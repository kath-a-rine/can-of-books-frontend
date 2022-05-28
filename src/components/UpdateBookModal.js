import React from 'react';
import { Modal, Button, Form, ModalBody, ModalFooter } from 'react-bootstrap';

class UpdateBookModal extends React.Component {

  handleBookSubmitUpdate = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      hasRead: e.target.hasRead.checked || this.props.book.hasRead,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBook(bookToUpdate);
  }


  render() {
    return (
      <>
        <Modal
          show={this.props.updateModalDisplayStatus}
          onHide={this.props.closeUpdateModalHandler}
        >
          <Modal.Header>
            <Modal.Title>Update Book!</Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Form onSubmit={this.props.updateBook}>
              <Form.Group controlId="bookTitle">
                <Form.Label>Book Title: </Form.Label>
                <Form.Control type="text" placeholder={this.props.book.title} />
              </Form.Group>
              <Form.Group controlId="bookDescription">
                <Form.Label>Book Description: </Form.Label>
                <Form.Control type="text" placeholder={this.props.book.description} />
              </Form.Group>
              <Form.Group controlId="hasRead">
                <Form.Check type="checkbox" label="I have read this book" ></Form.Check>
              </Form.Group>
              <Button type="submit" variant="info" onClick={this.props.closeUpdateModalHandler}>Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>
      </>
    )
  }
}
export default UpdateBookModal;