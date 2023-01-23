import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import Education from './components/Pages/Education';
import Projects from './components/Pages/Projects';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
      <PageWrapper>
        
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/projects" element={<Projects />} />
         </Routes>
        
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
