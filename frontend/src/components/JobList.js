import React from 'react';

function JobList() {
  // Sample jobs data - replace with actual API data
  const jobs = [
    { id: 1, title: 'Software Engineer', relevance: '95%' },
    { id: 2, title: 'Data Scientist', relevance: '88%' },
  ];

  return (
    <div>
      <h2>Job Recommendations</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.title} - Relevance: {job.relevance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
