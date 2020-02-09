import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

class Form extends React.Component {
	titleRef = React.createRef();
	authorRef = React.createRef();
	pagesRef = React.createRef();
	languageRef = React.createRef();
	genreRef = React.createRef();
	readRef = React.createRef();

	 static propTypes = {
	 	addBook: PropTypes.func
	 };

	createBook = (e) => {
		// 1. Prevent refresh
		e.preventDefault();
		// 2. Create Book
		if(this.titleRef.current.value === '') {
			this.props.alert('block', 'Please enter a title', 'darkred');
		} else {
			const book = {
				title: this.titleRef.current.value,
				author: this.authorRef.current.value,
				pages: this.pagesRef.current.value,
				language: this.languageRef.current.value,
				genre: this.genreRef.current.value,
				read: this.readRef.current.checked
			}
			this.props.addBook(book);
			this.props.alert('block', 'Book Added', 'green');
			// 3. Reset form
			e.currentTarget.reset();
		}
	};

	render() {
	  return (
	    <div className="form-section">
	    	<div className="container-title">
					<h2>Add a Book</h2>
				</div>
				<Alert display={this.props.display} bgColor={this.props.bgColor} text={this.props.text}/>
				<div className="form-book">
					<form onSubmit={this.createBook}>
						<div className='form'>
							<div className='form-row'>
			            		<div className="form-group">
			                		<label htmlFor="title">Title</label>
			                		<input type="text" name='title' className="title" ref={this.titleRef} />
			            		</div>
			            		<div className="form-group">
			                    	<label htmlFor="language">Language</label>
			                		<select className='language'  ref={this.languageRef}>
			                			<option value="English">English</option>
			                			<option value="Deutsch">Deutsch</option>
			                			<option value="Español">Español</option>
			                			<option value="Français">Français</option>
			                			<option value="Italiano">Italiano</option>
			                			<option value="Magyar">Magyar</option>
			                			<option value="Português">Português</option>
			                			<option value="Other">Other</option>
			                		</select> 
			                	</div>
			            	</div>
			            	<div className='form-row'>
			            		<div className="form-group">
			                		<label htmlFor="author">Author</label>
			                		<input type="text" name='author' className="author" ref={this.authorRef} />
			            		</div>
			            		<div className="form-group">
			                		<label htmlFor="genre">Genre</label>
			                		<select className='genre' ref={this.genreRef}>
			                			<option value="Novel">Novel</option>
			                			<option value="Biography">Biography</option>
			                			<option value="History">History</option>
										<option value="Philosophy">Philosophy</option>
										<option value="Poetry">Poetry</option>
										<option value="Religion">Religion</option>
										<option value="Self Help">Self Help</option>
										<option value="Short Stories">Short Stories</option>
										<option value="Other">Other</option>
									</select> 
			            		</div>
			            	</div>
			            	<div className='form-row'>
			            		<div className="form-group">
			                    	<label htmlFor="pages">Number of pages</label>
			                    	<input type="number" name='pages' className="pages" ref={this.pagesRef} />
			                	</div>
			                	<div className="form-checkbox">
			                    	<input type="checkbox" name='read' className="read" ref={this.readRef} />
			  						<label htmlFor="read"> Read</label>
			                	</div>
			                </div>
	                	</div>
	        			<input type="submit" value="ADD BOOK" className="form-button" />
	        		</form>
				</div>
	    </div>
	  );
  }
}

export default Form;