import React from 'react';

import Title from './Title.js';
import Text from './Text.js';
import { contentSections } from './content.js';

import './App.css';

const ContentSection = ({ section }) => {
  switch (section.type) {
    case "text":
      return (<Text>{section.text}</Text>)
    default:
      return null
  }
}

function App() {
  return (
    <div className="App">
      <Title title="35" subtitle="👇Scroll down 👇" />
      {contentSections.map((section, idx) => (
        <div key={idx}>
          <ContentSection section={section} />
        </div>
      ))}
    </div>
  );
}

export default App;
