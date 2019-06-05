import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Poem = () => {

  const [poem, setPoem] = useState(null);

  useEffect(() => {
    let url = "http://poets.org/poem-a-day"
    axios.get(url).then(res => console.log(res))
  }, [])

  return (
    <div className="poem-container">
      <h1>Poem of the Day</h1>
      {poem ? poem.content : <p>loading...</p>}
    </div>
  )
}

export default Poem