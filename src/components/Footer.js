import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/footer.css';

class Footer extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <footer>
                    <div className="text-center p-3 footerBottom">
                       2021 A simple survey web application by ©Arosh 
                    </div>
                </footer>
            </React.Fragment>
         );
    }
}
 
export default Footer;
