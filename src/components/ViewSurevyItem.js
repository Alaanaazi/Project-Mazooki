import React, { Component } from 'react';
import '../styles/viewSurveys.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/addSurvey.css';
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Confirm } from 'react-st-modal';
import { Publish } from '@material-ui/icons';



class ViewSurveyItem extends Component {
    state = { 
        surveyItem: {},
        questions: [],
        questionsA: []
    } 

    


    
    onChangeText = e => {
        let i = e.target.name;
        // 1. Make a shallow copy of the items
    let questions = [...this.state.questions];
    // 2. Make a shallow copy of the item you want to mutate
    let ques = {...questions[i]};
    // 3. Replace the property you're intested in
        
        
            ques.questionAnswers[ques.questionAnswers.length] = e.target.value;
        
        
        
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    questions[i] = ques;
    // 5. Set the state to our new copy
        this.setState({ questions });


        console.log(this.state.surveyItem.questions)

    }

    onChangeRadio = e => {
        let i = e.target.name;
        // 1. Make a shallow copy of the items
    let questions = [...this.state.questions];
    // 2. Make a shallow copy of the item you want to mutate
    let ques = {...questions[i]};
    // 3. Replace the property you're intested in
        
        
        ques.questionAnswers[ques.questionAnswers.length] = e.target.value;
        
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    questions[i] = ques;
    // 5. Set the state to our new copy
        this.setState({ questions });   

        console.log(this.state.surveyItem.questions)
    }

    onChangeCheckBox = e => {

    if(e.target.checked){
            let i = e.target.name;
        // 1. Make a shallow copy of the items
            let questions = [...this.state.questions];
    // 2. Make a shallow copy of the item you want to mutate
            let ques = {...questions[i]};
    // 3. Replace the property you're intested in
        
        
        ques.questionAnswers=[...this.state.questions[i].questionAnswers,e.target.value];
        
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    questions[i] = ques;
    // 5. Set the state to our new copy
        this.setState({ questions });   

        
        }
        
        if (!e.target.checked) {
            let i = e.target.name;
        // 1. Make a shallow copy of the items
            let questions = [...this.state.questions];
    // 2. Make a shallow copy of the item you want to mutate
            let ques = {...questions[i]};
    // 3. Replace the property you're intested in
            

            for (let index = ques.questionAnswers.length-1; index > -1; index--) {
                if (ques.questionAnswers[index] == e.target.value) {
                    ques.questionAnswers.splice(index, 1);
                    index = -1;
                    questions[i] = ques;
                    this.setState({ questions }); 
                    
                }
                
            }

             
    }
        
        
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

    incrementQuestion = () => {
        this.setState({ questionNo: this.state.questionNo + 1 })
    }

    renderText = (s,i) => {
        return <React.Fragment>
            <div class="container p-3 contSurveys white-grad w-75">
                            <div className="itemSet">
                <label for="exampleInputPassword1">Q{i+1} : { s.question }</label>
                                <input
                                    type="text"
                        className="form-control inputQ"
                                    name={i}
                                    value={this.state.questions[i].questionAnswers[this.state.questions[i].questionAnswers.length]}
                                    onChange={this.onChangeText}
                                />
                            </div>
                            </div>
                </React.Fragment>
    } 


    renderRadio = (s,i) => {
        return <React.Fragment>
                <div class="container p-3 contSurveys white-grad w-75">
                    <div className="itemSet">
                                    <label for="exampleInputPassword1">Q{i+1} : { s.question }</label>
                                    
                                    <div onChange={this.onChangeRadio}>
                                        {s.answers.map(ans => 
                                            
                                            <div class="form-check chAlign cqr">
                                                <input type="radio" name={i} value={ans.options} id="flexRadioDefault1" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    <span className="optionStyle"> {ans.options} </span>
                                                </label>
                                            </div>
            
                                        )}
                                    </div>
                    </div>
                    </div>
            </React.Fragment>
    }

    renderCheckbox = (s,i) => {
        return <React.Fragment>
                <div class="container p-3 contSurveys white-grad w-75">
                    <div className="itemSet"> 
                        <label for="exampleInputPassword1">Q{i + 1} : {s.question}</label>
                        <div onChange={this.onChangeCheckBox}>
                            {s.answers.map((ans,a) => 
                                        
                                <div class="form-check chAlign cqr">
                                    <input type="checkbox" name={i} value={ans.options} id={a} />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <span className="optionStyle"> {ans.options} </span>
                                    </label>
                                </div>

                            )}
                            </div>                    
                    </div>
                    </div>
            </React.Fragment>
    }

    display = (s,i) => {

        if (s.type === "text") {
            return this.renderText(s,i)
        }

        if (s.type === "radio") {
            return this.renderRadio(s,i)
        }

        if (s.type === "checkbox") {
            return this.renderCheckbox(s,i)
        }
    }
    
    onSubmit = () => {


        axios.get('http://localhost:5000/surveys/'+ this.props.match.params.id)
            .then(response => {


                for (let i = 0; i < response.data.questions.length; i++) {
                    const questions = [...this.state.questions];
                    const ques = { ...questions[i] };


                    if (ques.type == 'text') {
                        ques.questionAnswers = [...response.data.questions[i].questionAnswers, ques.questionAnswers[ques.questionAnswers.length-1]];
                        questions[i] = ques;
                       
                        
                        this.setState({ questions });

                    }

                    if (ques.type == 'radio') {
                        ques.questionAnswers = [...response.data.questions[i].questionAnswers, ques.questionAnswers[ques.questionAnswers.length-1]];
                        questions[i] = ques;
                       
                        
                        this.setState({ questions });

                    }



                    }

                    console.log(this.state.questions)
                    const survey = {
                        surveyTitle: this.state.surveyItem.surveyTitle,
                        description: this.state.surveyItem.surveyDesc,
                        questions: [...this.state.questions],
                        count : this.state.surveyItem.count
                    }
                    
                    
                
                    axios.post('http://localhost:5000/surveys/update/' + this.props.match.params.id, survey)
                      .then(res => console.log(res.data))
            
                      window.location = '/view-surveys';
        
        
        
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    
    // 5. Set the state to our new copy
           
           
                
          })
          .catch(function (error) {
            console.log(error);
          }) 
        
        

          
    }

    

    render() { 
        return ( 
            <React.Fragment>

                <div className="pageStyle1 jumbotron vertical-center"> 
                    <div>
                        <div className="innerCo">

                        <div class="container p-3 contSurveys white-grad w-75">
                            <h2>{ this.state.surveyItem.surveyTitle }</h2>
                            <p style={{}}>{ this.state.surveyItem.surveyDesc }</p>
                        </div>
                            <div class="cont1Home">
                                    {this.state.questions.map((survey,i) => 
                                        
                                        <div>
                                            {this.display(survey,i)}
                                        </div>

                                    )}
                            </div>

                             
                            
                        
                            <button className="buttonSubmit"
                                onClick={async () => {
                                    const result = await Confirm('Are you sure you want to submit this response?', 
                                        'Submit Survey');
                                    
                                    if (result) {
                                        {this.onSubmit()}
                                    } else {
                                        // Сonfirmation not confirmed
                                    }
                                    }}
                            >
                                <Publish color="white" style={{ fontSize: 20, marginTop: -2 }} />  SUBMIT RESPONSE </button>
                        </div>
                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default ViewSurveyItem;


