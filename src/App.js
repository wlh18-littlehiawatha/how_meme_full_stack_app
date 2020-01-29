import React from 'react';
import './App';
import Headr from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {routes}
      </div>
    </div>
  );
}

export default App;
