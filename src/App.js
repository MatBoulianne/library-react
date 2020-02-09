import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Library from './components/Library';
import './App.css';

class App extends React.Component {

  state = {
    books: [],
    alert: {
      display: 'none',
      text: '',
      bgColor: ''
    }
  } 

  componentDidMount() {
    // Reinstate localStorage
    const localStorageRef = localStorage.getItem('books');

    if(localStorageRef) {
      this.setState({ books: JSON.parse(localStorageRef) })
    }
  };

  componentDidUpdate() {
    localStorage.setItem('books', JSON.stringify(this.state.books))
  };

  // Add Book
  addBook = (book) => {
    // 1. Take a copy of the existing state
    const books = {...this.state.books};
    // 2. Add new book to books
    books[`book${Date.now()}`] = book;
    // 3. Set the new books obj to state
    this.setState({ books });
  };

  updateBook = (readStatus, key) => {
    // 1. Take a copy of the existing state
    const books = {...this.state.books};
    // 2. Update read status
    books[key].read = readStatus;
    // 3. Set new read status to state
    this.setState({ books });
  };

  deleteBook = (key) => {
    // 1. Take copy of state
    const books = { ...this.state.books };
    // 2. Update the state
    delete books[key];
    // 3. Update state
    this.setState({ books });
  };

  alert = (display, text, bgColor) => {
    this.setState({ display, text, bgColor });
    setTimeout(
      function() {
        this.setState({ display: 'none', text: '', bgColor: '' });
      }
      .bind(this),
      3000
    );
  };

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Form addBook={this.addBook} handleCheckbox={this.handleCheckbox} alert={this.alert} display={this.state.display} text={this.state.text} bgColor={this.state.bgColor} />
          <Library books={this.state.books} updateBook={this.updateBook} deleteBook={this.deleteBook} alert={this.alert} text={this.state.text} bgColor={this.state.bgColor} />
        </div>
      </div>
    );
  }
}

export default App;
