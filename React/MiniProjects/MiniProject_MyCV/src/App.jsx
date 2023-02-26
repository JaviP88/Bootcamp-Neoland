
import { useState } from 'react';
import './App.css'
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Courses from './Components/Courses/Courses';
import Experience from './Components/Experience/Experience';
import More from './Components/More/More';
import { DataCV } from './DataCV/DataCV';

const { hero, education, courses, experience, languages, habilities, volunteer } = DataCV

function App() {

  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <button className='custom-btn btn-4' onClick={() => setShowEducation (true)}>
        Education
      </button>
      <button className='custom-btn btn-4' onClick={() => setShowEducation(false)}>
        Courses
      </button>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Courses courses={courses} />
        )}
      <Experience experience={experience} />
      <More
      languages={languages}
      habilities={habilities}
      volunteer={volunteer}
       />
    </div>
  )
}

export default App
