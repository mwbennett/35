import React from 'react';
import AOS from 'aos';

import Title from './Title.js';
import Text from './Text.js';
import { contentSections } from './content.js';

import './App.css';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

const ContentSection = ({ section }) => (
  <div className="ContentSection">
    {section.type === "text" &&
      (<Text>{section.text}</Text>)
    }
  </div>
)

function App() {
  return (
    <div className="App">
      <Title title="35" subtitle="👇Scroll down 👇" />
      {contentSections.map((section, idx) => (
        <div key={idx} data-aos={section.aos}>
          <ContentSection section={section} />
        </div>
      ))}
    </div>
  );
}

export default App;
