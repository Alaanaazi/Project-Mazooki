import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionItem extends Component {

    onDelete = e => {
        e.preventDefault();
        this.props.deleteQuestion(e,e.target.value)
    }


    
    questionType() {
        if(this.props.question.type == 'checkbox') {
            return <React.Fragment>
                    <div className="form-group text-center ara qSize">
                    <label for="exampleInputPassword1">{this.props.question.question}</label>
                    <button value={this.props.question.question} type="submit" className="minusBtn1" onClick={this.onDelete} >-</button>
                    
                    </div>
                

                    {this.props.question.answers.map(answer => 
                        
                        <div class="form-check text-center chAlign">
                            <input class="form-check-input inputC" type="checkbox" value="" id="defaultCheck1" disabled />
                            <label class="form-check-label" for="defaultCheck1">
                            <span className="optionStyle">  {answer.options} </span>
                            </label>
                        </div>
                        
                    )}
                </React.Fragment>
        }

        if(this.props.question.type == 'radio') {
            return <React.Fragment>
                        <div className="form-group text-center ara qSize">
                    <label for="exampleInputPassword1">{this.props.question.question}</label>
                    <button value={this.props.question.question} type="submit" className="minusBtn1" onClick={this.onDelete} >-</button>
                        </div>
                

                    {this.props.question.answers.map(answer => 
                        
                        <div class="form-check chAlign">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" disabled />
                            <label class="form-check-label" for="flexRadioDefault1">
                            <span className="optionStyle"> {answer.options} </span>
                            </label>
                        </div>
                        
                )}
                </React.Fragment>
        }

        if(this.props.question.type == 'text') {
            return <React.Fragment>
                        <div className="form-group text-center ara qSize">
                    <label for="exampleInputPassword1">{this.props.question.question}</label>
                    <button value={this.props.question.question} type="submit" className="minusBtn1" onClick={this.onDelete} >-</button>
                                    <input
                                            type="text"
                                            className="form-control inputQ"
                                            value=""
                                            disabled
                                        />
                        </div>
                </React.Fragment>
        }
    }

    render() { 

        return (  
            <React.Fragment>
                    {this.questionType()}
            </React.Fragment>
        );
    }
}
 
export default QuestionItem;