import React from 'react'

import './App.css'
import DucksCard from './components/DucksCard'
import DucksForm from './components/DucksForm'
import DucksList from './components/DucksList'

const App = () => {
  return (
    <div className="App">
     <DucksForm />
     <DucksList />
     <DucksCard />
    </div>
  );
};

export default App;