import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/home.css';
import survey1 from '../images/survey1s.jpg'
import survey2 from '../images/survey2.jpg'
import survey3 from '../images/survey3.jpg'
import Particles from 'react-particles-js'; 

class Logo extends Component {
    render() { 
        return ( 
            <React.Fragment>

                <div className="pageStyle jumbotron vertical-center"> 
                    <div class="container p-3 contHome white-grad">
                            <h1 className="p-3">WELCOME TO MAŹOOKÏ</h1>
                                <div class="container p-3 cont1Home w-75 p-3">
                                <p>MAŹOOKÏ is an online survey creation and analysis tool where you can create your own surveys or respond to others' surveys and come to a conclusion based on the analysis of the data collected</p>
                                </div>
                        </div>
                    
                        <div class="container p-3 contHome white-grad second">
                            <h1 className="p-3">PROCESS OF MAŹOOKÏ ONLINE SURVEYS</h1>
                                <div class="container p-3 cont1Home w-75 p-3">
                                <p>Data is collected from each survey and processed automatically and presents the overall summary of each survey based on the data collected</p>
                                </div>
                                <div class="row outercon spacing">
                                    <div class="col-lg-4 col-sm-12 img1">
                                        <p>1. Collect Data</p>
                                        <img src={survey3} />
                                        
                                    </div>
                                    <div class="col-lg-4 col-sm-12 img1">
                                        <p>2. Process Data</p>
                                        <img src={survey2} />
                                    </div>
                                    <div class="col-lg-4 col-sm-12 img1">
                                        <p>3. Output overall analysis</p>
                                        <img src={survey1} />
                                    </div>
                                </div>
                            
                        </div>

                    </div>
            </React.Fragment>
         );
    }
}
 
export default Logo;