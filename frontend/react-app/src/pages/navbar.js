import React, { Component } from 'react';
import App from '../App.js'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="#">Home</a>
                <button>About</button>
                <a href="#" className="right">Contact</a>
            </div>
        );
    }
}

export default Navbar