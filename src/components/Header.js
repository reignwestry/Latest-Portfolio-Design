import React, {Component} from 'react';
import Nav from './Nav';


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="headerTitle">
                    <h1><span>Reign</span> Westry</h1>
                </div>
                
                <Nav />
            </header>
        )
    }
}

export default Header;