import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Pet from './Pages/Pet';
import Store from './Pages/Store';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Pet />} />
          <Route path="/store" element={<Store />} />
      </Routes>
    </>
  )
}

export default App;