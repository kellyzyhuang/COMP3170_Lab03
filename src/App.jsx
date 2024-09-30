import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story.jsx'; 

function App() {
  const [stories, setStories] = useState(news_feed.results);

  const deleteStory = (index) => {
    const updatedStories = stories.filter((_, i) => i !== index);
    setStories(updatedStories);
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="feed">
        {stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            onDelete={() => deleteStory(index)}  
          />
        ))}
      </div>
    </div>
  );
}

export default App;


