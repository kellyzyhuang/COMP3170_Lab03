import React from 'react';
import './Story.css';  

const Story = ({ story, onDelete }) => {
  const { title, creator, description, image_url, link } = story;

  return (
    <div className="story">
      <span className="delete" onClick={onDelete}>x</span>
      <div className="story_header">
        <div className="story_image">
          <img
            src={image_url || 'https://placehold.co/600x400?text=News+Image'}
            alt={title}
          />
        </div>
        <div>
          <h1><a href={link} target="_blank">{title}</a></h1>
          <p className="story_creator">By {creator}</p>
        </div>
      </div>
      <p className="story_description">{description}</p>
    </div>
  );
};

export default Story;
