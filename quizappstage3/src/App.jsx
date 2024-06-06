import React from 'react';
import {Routes,Route} from 'react-router-dom';
import First from './Component/First';
import Second from './Component/Second';
import Third from './Component/Third';

function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/quiz' element={<Second/>}/>
        <Route path='/result' element={<Third/>}/>
      </Routes>
    </div>
  )
}

export default App
