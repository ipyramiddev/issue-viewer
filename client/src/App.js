import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [issues, setIssues] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('http://localhost:3001/api/issues')
      .then(res => res.json())
      .then(data => {
        setIssues(data)
        setIsLoading(false)
      })
  }, []);
  console.log(issues)
  return (
    <div className="App">
      <div className="title">Issues</div>
      {isLoading ?
        <div>Loading</div> 
        :
        (
          <ul>
            {issues.map((item, index)=>
              <li key={index}>{item.title}</li>
            )}
          </ul>
        )}
    </div>
  );
}

export default App;
