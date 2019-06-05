import React, { useState, useEffect } from 'react';
import { parseNYT } from './util/parseNews';
import NewsStory from './NewsStory';

const News = () => {

  const [nytimes, setNytimes] = useState(null)

  useEffect(() => {
    parseNYT().then(result => setNytimes(result))
  }, [])

  const renderNews = () => {
    return nytimes.map(story => {
      let {title, section, short_url} = story;
      let thumb = null;
      if (story.multimedia.length) {
        thumb = story.multimedia[0].url
      }
      return <NewsStory title={title} section={section} thumb={thumb} url={short_url}/>
    })
  }

  return (
    <div className="news-container">
      <h1>News</h1>
      {nytimes ? renderNews() : <p>loading...</p>}
    </div>
  )
}

export default News