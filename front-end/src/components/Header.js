import React, { Component } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Header extends Component {
    
    state = {
        navItem:""
    }
    

    handleNavChange = (e) => {
        const target = e.target;
        const value = target.name;
        this.setState({ navItem: value });
        console.log(this.state)
    };



    

    render() { 

        
            
        return ( 
            <React.Fragment>
                <header className="sticky-top"> 
                    <nav class="navbar navbar-expand-lg navbar-dark bgPurple">
                        <div class="d-flex flex-grow-1">
                            <span class="w-100 d-lg-none d-block"></span>
                            <Link name="title" class="navbar-brand h2 navTitleFont" to="/" style={{fontSize: '30px'}} onClick={this.handleNavChange}>
                                MAŹOOKÏ
                            </Link>
                            <div class="w-100 text-right">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                            <ul class="navbar-nav ml-auto flex-nowrap navLinFont">
                                <li class={this.state.navItem==="link1" || window.location.href=='http://localhost:3000/create-survey' ? "nav-item active":"nav-item"} >
                                    <Link name="link1" to="/create-survey" class="nav-link" style={linkStyle} onClick={this.handleNavChange}>CREATE SURVEY</Link>
                                </li>
                                <li class={this.state.navItem==="link2" || window.location.href=='http://localhost:3000/view-surveys' || window.location.href.includes('http://localhost:3000/view-survey-item') ? "nav-item active":"nav-item"} >
                                    <Link name="link2" to="/view-surveys" class="nav-link" style={linkStyle} onClick={this.handleNavChange}>VIEW SURVEYS</Link>
                                </li>
                                <li class={this.state.navItem==="link3" || window.location.href=='http://localhost:3000/login' || window.location.href.includes('http://localhost:3000/survey-analysis')? "nav-item active":"nav-item"} age="lss" >
                                    <Link name="link3" to="/login" class="nav-link" style={linkStyle} onClick={this.handleNavChange}>MANAGE SURVEYS</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>


         );
    }
}
 
const linkStyle = {
    marginRight: '80px'
}


export default Header;

/*
    Problem :  
    Initially the class of li tags in line no 38,41 and 44 should be "nav-item" and once it's
    clicked it should be changed to "nav-item active". (the active class should be applied to the 
    link that is clicked and all the class of the rest of the links should be "nav-item")

    A method to implement this is written in line no 9 but how ever it is only working when the page 
    is loaded and only tested it for one li tag

*/

/*
    Solution : 
    Refer the changes on line 43 to 50. Use the onCLick method to invoke the method handleNavchange where you can handle any action.
    Used state to maintain current active navitem .
    (Recommondation : create a new component for nav item and maintain the state there .)
    If you are trying to implement a nav tab (like behavior) avoid route in the <link> since this will clear the state, instead dynamically render the content below based on the current navItem state.
*/