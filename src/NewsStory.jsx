import React from 'react';

const NewsStory = ({title, section, thumb, url}) => (
  <div className="news-story-container" onClick={() => window.open(url)}>
    <img src={thumb} />
    <h3>{title}</h3>
    <p>{section}</p>
  </div>
)

export default NewsStory