import React from 'react';
import axios from 'axios';
import { Carousel, Container, Form } from 'react-bootstrap';
import bookimg from './assets/books.jpg';
import './BestBooks.css';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
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
  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);
    /* TODO: render all the books in a Carousel */
    let carouselItems = this.state.books.map(bookObj => {
      return (
        <Carousel.Item key={bookObj._id}>
          <img
            className="photos"
            src={bookimg}
            alt="First slide"
          />
          <Carousel.Caption style={{ backgroundcolor: 'black' }}>
            <h3>{bookObj.title}</h3>
            <p>{bookObj.description}</p>
          </Carousel.Caption>
        </Carousel.Item >
      )
    }
    )
    // ________________________________________
    return (
      <>
        <h5>Books Form</h5>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>
                <Form.Control />
              </Form.Label>
            </Form.Group>
          </Form>
        </Container>

        {
          this.state.books.length ? (
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
              <Carousel>
                {carouselItems}
              </Carousel>
            </Container>
          ) : (
            <h3>No Books Found :( </h3>
          )
        }
      </>
    );
  }
}

export default BestBooks;
