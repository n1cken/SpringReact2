import './App.css';
import UserComponent from './components/UserComponent';
import Navbar from "./pages/navbar";
import React from "react";
import axios from "axios";

function App() {

    return (

    <div className="App">
      <UserComponent/>
      <Navbar/>
    </div>

  );
}

export default App;
