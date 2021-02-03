import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkbox extends Component {
    render() { 
        return ( 
            <React.Fragment>
                
                        
                        <input
                            type="text"
                            class="form-control chAlign1"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={this.props.Question.rAnswer}
                            onChange={this.props.onChangeRadio}
                            placeholder="Enter Option"
                        />
                
                
                            {this.props.Question.radiobuttonAnswers.map(radio => 
                                
                                <div className="text-left qSize">
                                    <div className="radCenter">
                                        <input type="checkbox" value="male" name="gender" />
                                        <span className="optionStyle"> {radio.options} </span>
                                        <Link className="minusBtn" onClick={() => this.props.deleteOption(radio.id)} >-</Link>
                                    </div>

                                </div>
                                
                            )}
                        

                        <button type="submit" className="btn btn-primary" onClick={this.props.onRadioSubmit}>
                            ADD OPTION
                        </button>
                    
                
            </React.Fragment>
         );
    }
}
 
export default Checkbox;