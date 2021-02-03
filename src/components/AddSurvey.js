import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/addSurvey.css';
import QuestionItem from "../components/QuestionItem";
import QuestionPopUp from "../components/QuestionPopUp";
import axios from 'axios';
import { Confirm } from 'react-st-modal';
import { Backup } from '@material-ui/icons';



class AddSurvey extends Component {
    state = { 
            visible : false,
            surveyID: '',
            surveyTitle: '',
            surveyDesc: '',
            questions: []
    }

    deleteQuestion = (e, q) => {
        e.preventDefault();
        this.setState({
            questions: [...this.state.questions.filter(ques => ques.question !== q)]
        });

    }

    

    addQuestion = (e,Question) => {

        e.preventDefault();

        const val = {
            question: Question.ask,
            type: Question.select,
            answers: [...Question.radiobuttonAnswers]
        }

        
        this.setState({
            questions: [...this.state.questions,val]
        });

        
    }
    
    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    onChangeTitle = e => {
        this.setState({
            surveyTitle : e.target.value 
        });
    }

    onChangeDescription = e => {
        this.setState({
            surveyDesc : e.target.value 
        });
    }

    onSubmit= () => {

        const survey = {
            surveyTitle: this.state.surveyTitle,
            surveyDesc: this.state.surveyDesc,
            questions: [...this.state.questions],
            count: 0
        }


        

        axios.post('http://localhost:5000/surveys/add', survey)
            .then(res => console.log(res.data));

        //window.location = '/';



        this.setState({
            surveyTitle: '',
            surveyDesc: '',
            questions: []
        });
          

        window.location = '/view-surveys';

    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="pageStyle jumbotron vertical-center"> 
                    <div className="container p-3 contAdd white-grad">
                        <div className="container p-3 w-75">
                            <div style={{ color: '#404f45' }}>
                                
                                <div className="form-group text-center ara ves">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input
                                        type="text"
                                        className="form-control inputQ"
                                        value= { this.state.surveyTitle }
                                        onChange={this.onChangeTitle}
                                        required
                                    />
                                </div>

                                <div className="form-group text-center ara ves">
                                    <label for="exampleInputPassword1">Description</label>
                                    <input
                                        type="text"
                                        className="form-control inputS"
                                        value= { this.state.surveyDesc }
                                        onChange={this.onChangeDescription}
                                        required
                                    />
                                </div>

                                {this.state.questions.map(question => 
                        
                                    <QuestionItem
                                        question={question}
                                        key={question.qNo}
                                        deleteQuestion={this.deleteQuestion}
                                    />
                                    
                                )}

                                <QuestionPopUp addQuestion={this.addQuestion} />
                
                                <button type="submit"
                                        className={this.state.questions.length === 0 ? "buttonLoginDisabled" : "buttonSubmit1"}
                                        disabled={this.state.questions.length === 0 ? true : false}
                                        onClick={async () => {
                                                    const result = await Confirm('Are you sure you want to publish this survey?', 
                                                        'Survey');
                                                    
                                                    if (result) {
                                                        {this.onSubmit() }
                                                    } else {
                                                        // Сonfirmation not confirmed
                                                    }
                                                    }}>
                                    <Backup color="white" style={{ fontSize: 20, marginTop: -2 }} /> 
                                           <span style={{marginLeft: 5}}> PUBLISH SURVEY </span>
                                            
                                </button>
                            </div>

                            
                            

                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default AddSurvey;


/*


{this.state.navItem==="link1" ? "nav-item active":"nav-item"} 

*/