import './App.css';
import UserComponent from './components/UserComponent';
import Navbar from "./pages/navbar";
import React from "react";
import axios from "axios";

function App() {

    //Needs to move functions!
    const [post, setPost] = React.useState(null);

    function postUser() {
        axios.post("http://localhost:8080/api/users", {
            firstName : "MARIO",
            lastName : "MARIO",
            email : "mario@nintendo.com"
        }).then((response) => {
            setPost(response.data);
        });
    }


    return (
    <div className="App">
      <UserComponent/>
      <Navbar/>

        <div className="navbar">
            <a href="#">Home</a>
            <button onClick={postUser}>POST</button>
            <a href="#" className="right">Contact</a>
        </div>
    </div>

  );
}

export default App;
