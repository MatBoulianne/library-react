import React, { Component } from 'react';
import BookItem from './BookItem';

class Library extends Component {

    render() {
        return (
            <div className="Library">
        	<div className="container-title">
    			<h2>Library</h2>
    		</div>
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
                            <BookItem key={key} index={key} details={this.props.books[key]} deleteBook={this.props.deleteBook} />
                            ))}
                	</tbody>
            	</table>
        </div>
      );
    }
}

export default Library;