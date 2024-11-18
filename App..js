//App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostPage from './PostPage';
import FindQuestion from './FindQuestion';
import { PostProvider } from './context/Postcontext.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-item"><Link to="/">Home</Link></div>
          <div className="nav-item"><Link to="/find-question">Find Question</Link></div>
        </nav>
        <PostProvider>
          <Routes>
            <Route path="/" element={<PostPage />} />
            <Route path="/find-question" element={<FindQuestion />} />
          </Routes>
        </PostProvider>
      </div>
    </Router>
  );
}

export default App;

