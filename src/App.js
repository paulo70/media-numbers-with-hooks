import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Media from './components/media'
import Sum from './components/sum'
import Sort from './components/sort'
import Interval from './components/interval'

function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Hooks Example</h1>
      <div className='line'>
        <Interval
          min = { min }
          max = { max }
          onMinChanged = { setMin }
          onMaxChanged = { setMax }
          >
        </Interval>
      </div>
      <div className='line'>
        <Media min={ min } max={ max }></Media>
        <Sum   min={ min } max={ max }></Sum>
        <Sort  min={ min } max={ max }></Sort>
      </div>
    </div>
  );
}

export default App;
