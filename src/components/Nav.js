import React, {Component} from 'react';
import {  NavLink } from "react-router-dom";




class Nav extends Component {
    render() {
        return (
            
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="is-active">Home</NavLink></li>
                    <li><NavLink to="/services" activeClassName="is-active">Services</NavLink></li>
                    <li><NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="is-active">Resume</NavLink></li>
                    <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Nav;