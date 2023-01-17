import { React, useState } from 'react';
import SearchApp from './component/searchapp/searchapp';
import About from './component/about/about.jsx';
import SavedSearches from './component/savedsearches/savedsearches';
import Navbar from './component/navbar/navbar';
import {Routes, Route } from "react-router-dom";



function App() {
        const[saved , setSaved]= useState([]);

  return (

    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<SearchApp saved={saved}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/savedsearches" element={<SavedSearches saved={saved}/>} />
        </Routes >
    
    </div >

  );
}

export default App;
