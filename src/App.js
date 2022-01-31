import './App.css';
import React, { useContext } from "react";
import { ReferenceDataContext, ReferenceDataContextProvider } from "./ReferenceDataContext"
import HomePage from './components/HomePage';
import Season from './components/Season';
import Episode from './components/Episode';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import AllCharacters from './components/AllCharacters';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const breakingBadData = useContext(ReferenceDataContext); 
  return (
    <ReferenceDataContextProvider >
    <BrowserRouter>
    <Navbar/>
      <>      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:id" element={<Season/>}/>
        <Route path="/episodes/:id" element={<Episode/>}/>
        <Route path="/characters/:id" element={<Characters/>}/>
        {/* <Route path="/characters?name=/:name" element={<Characters/>}/> */}
        <Route path="/characters" element={<AllCharacters/>}/>
      </Routes>
      </>
    </BrowserRouter>
    </ReferenceDataContextProvider>
  );
}

export default App;
