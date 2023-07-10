import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { Header } from './components/Header';
import { AppContextProvider } from './context/AppContext';
import { Communities } from './pages/Communities';

function App(props: any) {
  return (
    <div className="wrapper">
      <AppContextProvider>
        <BrowserRouter>
          <Header history={props.history}></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/communities" element={<Communities {...props} />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;