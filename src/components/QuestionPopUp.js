import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { v4 as uuid } from "uuid"; 
import { Link } from 'react-router-dom';
import RadioButton from '../components/RadioButton';
import Checkbox from '../components/Checkbox';
import { AddCircle,Add } from '@material-ui/icons';



class QuestionModal extends Component {

    constructor(props) {
        super(props);
    
        this.deleteOption = this.deleteOption.bind(this);
      }

    state = { 
        visible: false,
        Question: {
            ask: '',
            select: '',
            rAnswer: '',
            radiobuttonAnswers: []
        }
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

    selectEvent = event => {
        this.setState({
            Question: {
                ...this.state.Question,
                select: event.target.value
            }
            
        });
    }

    onChangeRadio = event => {
        this.setState({
            Question: {
                ...this.state.Question,
                rAnswer : event.target.value 
            }
        });
    }

    onRadioSubmit = e => {
        e.preventDefault();

        const ans = {
            id: uuid(),
            options : this.state.Question.rAnswer
        }

        this.setState({
            Question: {
                ...this.state.Question,
                radiobuttonAnswers: [...this.state.Question.radiobuttonAnswers, ans],
                rAnswer : ''
            }
            
        });
    }

    deleteOption(i) {
        this.setState({
            Question: {
                ...this.state.Question,
                radiobuttonAnswers: [...this.state.Question.radiobuttonAnswers.filter(answer => answer.id != i)]
            }
        });
    }

    
    displayQuestion = () => {
        if (this.state.Question.selects === 'text') {
            return null
        }

        if (this.state.Question.select === 'radio') {
            return <RadioButton
                        Question={this.state.Question}
                        onChangeRadio={this.onChangeRadio}
                        deleteOption={this.deleteOption}
                        onRadioSubmit={this.onRadioSubmit}
                    />
        }

        if (this.state.Question.select === 'checkbox') {
            return <Checkbox
                        Question={this.state.Question}
                        onChangeRadio={this.onChangeRadio}
                        deleteOption={this.deleteOption}
                        onRadioSubmit={this.onRadioSubmit}
                    />
        }
    }

    aa = e => {
        e.preventDefault();
        this.closeModal()
        this.props.addQuestion(e, this.state.Question)
        
        this.setState({
            Question: {
                ...this.state.Question,
                ask: '',
                select: '',
                rAnswer: '',
                radiobuttonAnswers: []
            }
        })
    }

    onChangeAsk = e => {
        this.setState({
            Question: {...this.state.Question,
                ask: e.target.value
            }
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                <PerfectScrollbar>
                            <section>
                        <button className="buttonAdd" type="button" value="Open" onClick={() => this.openModal()}>
                            <AddCircle color="white" style={{ fontSize: 20, marginTop: -2 }} /> <span style={{marginLeft: 5}}>ADD NEW QUESTION</span>
                        </button>
                                <Modal 
                                    visible={this.state.visible}
                                    width="700"
                                    height="600"
                                    effect="fadeInUp"
                                    onClickAway={() => this.closeModal()
                                    }
                                >
                                    <div className="ara scrollClass">
                                    <div class="qw ara">
                                        <form>
                                            <label for="exampleInputEmail1">Enter question</label>
                                        <input type="text"
                                            class="form-control chAlign1"
                                            value= { this.state.Question.ask }
                                            onChange={this.onChangeAsk}
                                            required    
                                        />
                                        
                                            <label for="exampleFormControlSelect1">Type of question</label>
                                            <select
                                                value={this.state.Question.select}
                                                class="form-control chAlign1"
                                                id="exampleFormControlSelect1"
                                                onChange={this.selectEvent}>
                                                    <option selected>Select Type</option>
                                                    <option value="text" >Text</option>
                                                    <option value="radio" >Radio button</option>
                                                    <option value="checkbox" >Checkbox</option>
                                            </select>

                                        <h1>{this.displayQuestion()}</h1>
                                        
                                        <button type="submit"
                                            onClick={this.aa}
                                            className={this.state.Question.select === 'text' || this.state.Question.radiobuttonAnswers.length > 0 ? "buttonAdd" : "buttonLoginDisabled"}
                                            disabled={ this.state.Question.select === 'text' || this.state.Question.radiobuttonAnswers.length > 0 ? false : true }>
                                            <Add color="white" style={{ fontSize: 20, marginTop: -2 }} />
                                            <span style={{marginLeft: 5}}>ADD QUESTION</span>
                                        </button>

                                        </form>
                                    </div>
                                        
                                        <Link onClick={() => this.closeModal()}>Close</Link>
                                    </div>
                                </Modal>
                    </section>
                    </PerfectScrollbar>
            </React.Fragment>
         );
    }
}
 
export default QuestionModal;