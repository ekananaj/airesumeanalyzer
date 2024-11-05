import React from 'react';
import ResumeUpload from './components/ResumeUpload';
import JobList from './components/JobList';

function App() {
  return (
    <div>
      <h1>AI-Powered Resume Analyzer & Job Matcher</h1>
      <ResumeUpload />
      <JobList />
    </div>
  );
}

export default App;
