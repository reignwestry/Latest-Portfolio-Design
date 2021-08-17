import React, {Component} from 'react';
import Nav from './Nav';


class Header extends Component{
    render() {
        return (
            <header>
                <div className="headerTitle">
                    <h1><span>{this.props.titleFname}</span>{this.props.titleLname}</h1>
                </div>
                    
                <Nav />
            </header>
        );
    }
}


export default Header;