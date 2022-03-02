import React from "react";
import './App.css';
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const App=()=> {
  return (
    <>
      <Header/>
      <Body/>
    </>
  );
}

export default App;
