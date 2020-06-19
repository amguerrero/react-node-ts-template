import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [ message, setMessage ] = useState('<Retrieving message...>');
  useEffect(() => {
    const retrieveInfo = async () => {
      const msg = await axios.get('/api');
      setTimeout(function() {
        setMessage(msg.data.message);
      }, 3000);
    }

    retrieveInfo();
  }, [ message ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Message from /api:
        </h1>
        <h3>
          {message}
        </h3>
      </header>
    </div>
  );
}

export default App;
