import React from 'react';
import AOS from 'aos';

import Title from './Title.js';
import ContentSection from './ContentSection.js';
import { contentSections } from './content.js';

import 'aos/dist/aos.css';
import './App.css';

// Initialize AOS
AOS.init();

function App() {
  return (
    <div className="App">
      <Title title="34" subtitle="⬇️ Scroll Down ⬇️" />
      {contentSections.map((section, idx) => (
        <div key={idx} data-aos={section.aos}>
          <ContentSection section={section} />
        </div>
      ))}
    </div>
  );
}

export default App;
