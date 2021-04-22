import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Create } from '@material-ui/icons';



class SurveyItem extends Component {

    redirect = () => {
        window.location = "/view-survey-item/"+this.props.survey._id
    }

    render() { 
        const { surveyTitle,surveyDesc } = this.props.survey
        return ( 
            <React.Fragment>
                <div class="container p-3 contSurveys white-grad w-75">
                        <h2>{surveyTitle}</h2>
                        <div class="cont1Home">
                            <p>{surveyDesc}</p>
                        </div>
                    <button onClick={this.redirect} to={"/view-survey-item/" + this.props.survey._id} className="buttonRespond">
                        <Create color="white" style={{ fontSize: 18, marginTop: -2 }} />
                        <span style={{marginLeft: 5}}>RESPOND</span>
                        </button>
                 </div>
            </React.Fragment>
        );
    }
}
 
export default SurveyItem;