import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/viewSurveys.css';
import SurveyItem from "../components/SurveyItem";
import axios from 'axios';

class ViewSurveys extends Component {
    state = {

        surveyList: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/surveys/')
          .then(response => {
            this.setState({ surveyList: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }
    
    renderItem = () => {
        if (this.state.surveyList.length == 0) {
            return <React.Fragment>
                <h1 style={{color: '#fff'}}>No surveys are available at the moment</h1>

            </React.Fragment>
        }

        if (this.state.surveyList.length != 0) {
            return <React.Fragment>
                {this.state.surveyList.reverse().map(survey => 
                        
                        <SurveyItem survey={survey} key={survey._id} />
                        
                    )}

            </React.Fragment>
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="pageStyle1 jumbotron vertical-center"> 
                    
                {this.renderItem()}


               
                </div>
            </React.Fragment>
         );
    }
}
 
export default ViewSurveys;