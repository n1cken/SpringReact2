import React, { Component } from 'react';
import axios from "axios";

function Navbar() {

    const [post, setPost] = React.useState(null);

    function postUser() {
        axios.post("http://localhost:8080/api/users", {
            firstName: "MARIO",
            lastName: "MARIO",
            email: "mario@nintendo.com"
        }).then((response) => {
            setPost(response.data);
        });
    }

    return (
            <div className="navbar">
                <a href="#">Home</a>
                <button onClick={postUser}>POST</button>
                <a href="#" className="right">Contact</a>
            </div>
        );
}


export default Navbar