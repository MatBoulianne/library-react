import React from 'react';
import PropTypes from 'prop-types';

class Stats extends React.Component {
	static propTypes = {
		books: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            author: PropTypes.string,
            pages: PropTypes.number,
            language: PropTypes.string,
            genre: PropTypes.string,
            read: PropTypes.bool
        }))
	};

	readStats = (books) => {
		let count = 0;

		books.forEach(key => {
			if(this.props.books[key].read === true) {
				count += 1;
			}
		});	
		
		return count;
	};

	render() {
		const books = Object.keys(this.props.books);
		const totalBooks = books.length;

		return (
			<div className='stats'>
				<p>{totalBooks} book(s)</p>
				<p>{this.readStats(books)} read</p>
			</div>
		);
	}
}

export default Stats;