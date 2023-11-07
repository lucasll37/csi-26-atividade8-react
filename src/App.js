import React, { useState, useEffect } from 'react';
import DataService from './DataService';
import './App.css'; // Este arquivo será o arquivo CSS para estilização

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DataService.fetchData().then(data => {
      setItems(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Items</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="data-list">
            {items.map(item => (
              <li key={item.id} className="data-item">{item.name}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
