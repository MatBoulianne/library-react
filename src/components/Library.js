import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import Stats from './Stats';

class Library extends Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            author: PropTypes.string,
            pages: PropTypes.number,
            language: PropTypes.string,
            genre: PropTypes.string,
            read: PropTypes.bool
        })),
        updateBook: PropTypes.func,
        deleteBook: PropTypes.func
    };

    render() {
        return (
            <div className="Library">
            	<div className="container-title">
        			<h2>Library</h2>
        		</div>

                <Stats books={this.props.books}/>

            	<table>
                	<thead>
                    	<tr>
    	                    <th>TITLE</th>
    	                    <th>AUTHOR</th>
    	                    <th>PAGES</th>
    	                    <th>LANGUAGE</th>
    	                    <th>GENRE</th>
    	                    <th>READ</th>
    	                    <th></th>
                    	</tr>
                	</thead>
                	<tbody className="book-list">
                       {Object.keys(this.props.books).map(key => (
                            <BookItem books={this.props.books} key={key} index={key} details={this.props.books[key]} updateBook={this.props.updateBook} deleteBook={this.props.deleteBook} alert={this.props.alert} />
                            ))}
                	</tbody>
            	</table>
        </div>
      );
    }
}

export default Library;