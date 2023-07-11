import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { Header } from './components/Header';
import { AppContext, AppContextProvider } from './context/AppContext';
import { Communities } from './pages/Communities';
import { Login } from './pages/Login';

function App(props: any) {
  const context: any = useContext(AppContext);

  return (
    <div className="wrapper">
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <>
                <Header history={props.history}></Header>
                <Home />
              </>
            } />
            <Route path="/communities" element={
              <>
                <Header history={props.history}></Header>
                <Communities />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;