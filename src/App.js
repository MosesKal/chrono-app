import './styles/App.css';
import Chrono from './components/Chrono';
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className='title'>Chronomètre</h1>
      <div className='container-chrono'>
        <div className='circle'>
          <Chrono />
        </div>
      </div>
      <div className='button'></div>
    </div>
  );
}

export default App;
