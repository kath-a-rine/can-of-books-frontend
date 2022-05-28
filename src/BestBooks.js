import React from 'react';
import axios from 'axios';
import { Carousel, Container, Button } from 'react-bootstrap';
import bookImg from './assets/books.jpg';
import './BestBooks.css';
import BookFormModal from './components/BookFormModal';
import DeleteButton from './components/DeleteButton';

//let SERVER = process.env.REACT_APP_SERVER;
let SERVER = `https://can-of-books-d85.herokuapp.com`;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      newBook: {},
      modalDisplayStatus: false
    }
  }
  componentDidMount() {
    this.getBooks();
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      console.log(`${SERVER}/books`)
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log('There has been an error');
    }
  }

  openModalHandler = () => {
    this.setState({
      modalDisplayStatus: true
    })
  }

  closeModalHandler = () => {
    this.setState({
      modalDisplayStatus: false
    })
  }

  submitFormHandler = async (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.bookTitle.value,
      description: e.target.bookDescription.value,
      hasRead: e.target.hasRead.checked
    }
    console.log(newBook);
    try {
      const addBook = await axios.post(`${process.env.REACT_APP_SERVER}/books`, newBook)
      this.setState({
        modalDisplayStatus: false,
        books: [...this.state.books, addBook.data]
      });
    } catch (error) {
      console.log('an error has occurred')
    }
  }

  deleteBookHandler = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/books/${id}`)
      let updatedBookList = this.state.books.filter(book => book._id !== id)
      console.log(id);
      this.setState({
        books: updatedBookList,
      });
    } catch (error) {
      console.log('an error has occurred')
    }
  }

  render() {
    console.log(this.state.books);
    /* TODO: render all the books in a Carousel */
    let carouselItems = this.state.books.map(bookObj => {
      return (
        <Carousel.Item key={bookObj._id}>
          <img
            className="photos"
            src={bookImg}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>{bookObj.title}</h3>
            <p>{bookObj.description}</p>
            <DeleteButton
              deleteBook={this.deleteBookHandler}
              id={bookObj._id}
            />
          </Carousel.Caption>
        </Carousel.Item >
      )
    }
    )
    return (
      <>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          {
            this.state.books.length ? (
              <Carousel>
                {carouselItems}
              </Carousel>
            ) : (
              <h3>No Books Found :( </h3>
            )
          }

          <Button variant="warning" onClick={this.openModalHandler}>Add a new book</Button>
        </Container>
        <BookFormModal
          modalDisplayStatus={this.state.modalDisplayStatus}
          submitFormHandler={this.submitFormHandler}
          closeModalHandler={this.closeModalHandler}
        />

      </>
    );
  }
}

export default BestBooks;
