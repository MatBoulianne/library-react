import React from 'react';
import PropTypes from 'prop-types';

class BookItem extends React.Component {
    static propTypes = {
        deleteBook: PropTypes.func,
        updateBook: PropTypes.func,
        index: PropTypes.string,
        details: PropTypes.shape({
            title: PropTypes.string,
            author: PropTypes.string,
            pages: PropTypes.number,
            language: PropTypes.string,
            genre: PropTypes.string,
            read: PropTypes.bool
        })
    };

    confirmDelete = () => {
            if(window.confirm('Are you sure you want to delete this entry?')) {
                this.props.deleteBook(this.props.index)
                this.props.alert('block', 'Book Deleted', 'darkred');
            }
        };

    readStatus = (status) => {
        let readValue;

        if(status === true) {
            readValue = 'Read';
        } else {
            readValue = 'Not Read';
        }
        return readValue;
    };

    handleChange = (e) => {
        this.props.updateBook(e.currentTarget.checked, this.props.index);
    };

    render() {
        // Destructuring
        const { title, author, pages, language, genre, read } = this.props.details;
        
      return (
            <tr>
                <td>{title}</td>
                <td>{author}</td>
                <td>{pages}</td>
                <td>{language}</td>
                <td>{genre}</td>
                <td>{this.readStatus(read)} <input type='checkbox' name='read' className="read" checked={read} onChange={this.handleChange}/></td>
                <td><button href="#" className="delete-button delete" onClick={this.confirmDelete}>X</button></td>
            </tr>
      );
  }
}

export default BookItem;