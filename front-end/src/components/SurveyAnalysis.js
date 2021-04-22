import React, { Component } from 'react';
import SurveyAnalyisItem from "../components/SurveyAnalyisItem";
import axios from 'axios';
import '../styles/surveyAnalysis.css';

class SurveyAnalysis extends Component {
    state = {
        surveyItem: [],
        questions: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/surveys/'+ this.props.match.params.id)
          .then(response => {
            this.setState({
                surveyItem: response.data,
                questions: [...response.data.questions]
            })   
              
              
              
              
          })
          .catch(function (error) {
            console.log(error);
          })
    
          
      }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="pageStyle1 jumbotron vertical-center"> 
                    
                <div class="container p-3 contSurveys white-grad w-75 doo">
                            <h2>{ this.state.surveyItem.surveyTitle }</h2>
                            <p>{ this.state.surveyItem.surveyDesc }</p>
                    </div>
                    
                    {this.state.questions.map((question,i) => 
                        
                        <SurveyAnalyisItem question={question} i={i} key={question.question} />
                        
                    )}
      
                </div>
            </React.Fragment>
         );
    }
}
 
export default SurveyAnalysis;