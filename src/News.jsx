import React, { useState, useEffect } from 'react';
import { parseNYT } from './util/parseNews';

const News = () => {

  const [nytimes, setNytimes] = useState(null)

  useEffect(() => {
    parseNYT().then(result => setNytimes(result))
  }, [])

  return (
    <div className="news-container">
      <h1>News</h1>
      {nytimes ? <p>Here's the news!</p> : <p>loading...</p>}
    </div>
  )
}

export default News