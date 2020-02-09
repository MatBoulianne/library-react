import React, {useEffect, useState} from 'react';

function Header() {

	const [quote, setQuote] = useState([]);

	useEffect(() => {
		getQuote();
	}, []);

	const getQuote = async () => {
		const response = await fetch(`https://api.myjson.com/bins/k00c2`);
		const data = await response.json();

		let quotes = data.quotes;
		let randomQuote = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[randomQuote]);
	};

  return (
    <div className="Header">
    	<blockquote className='quote'>{quote.quote}</blockquote>
		<cite className='quote-author'>{quote.author}</cite>
    </div>
  );
}

export default Header;