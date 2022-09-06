import React from "react";
import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from "./component/Login";
import Registration from "./component/Registration";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

      {/* <Route path='/table' element={<Table/>}/> */}
    </Routes>
    </BrowserRouter>


    
    </div>
  );
}

export default App;
