import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get("http://quotes.rest/qod.json")
      .then(result => {
        setQuote(result.data.contents.quotes[0])
      })
  }, [])

  return (
    <div className="quote-container">
      <h1>Quote of the Day</h1>
      {quote ?
        (<>
          <h3>{quote.quote}</h3>
          <p>{quote.author}</p>
        </>) :
        <p>loading...</p>}
    </div>
  )
}

export default Quote