import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Confirm } from 'react-st-modal';
import axios from 'axios';
import { Delete,Equalizer } from '@material-ui/icons';

class AdminSurveyItem extends Component {


    deleteSurvey = (id) => {

        axios.delete('http://localhost:5000/surveys/'+id)
        .then(response => { console.log(response.data)});
  
        
        window.location = '/login';
    }

    redirect = (id) => {
        window.location = "/survey-analysis/"+id
    }

    render() { 
        const { _id,surveyTitle,surveyDesc,count } = this.props.surveys
        return ( 
            <React.Fragment>
                <div class="container p-3 contSurveys white-grad w-75">
                    <h2>{surveyTitle}</h2>
                        <div class="cont1Home">
                            <p>{surveyDesc}</p>
                    </div>
                        <p  style={{ fontSize: 18, color: "#2e8f39",fontWeight : 500 }}>
                            Total responses :
                            <span
                                style={{ marginLeft: 10, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}

                            >
                                {count}
                            </span> 
                            
                        </p>
                    <button
                        className={count === 0 ? "buttonDisabled" : "buttonAnalysis"}
                        disabled={count === 0 ? true : false}
                        onClick={() => this.redirect(_id)}>
                        <Equalizer color="white" style={{ fontSize: 18, marginTop: -2 }} />
                        <span style={{marginLeft: 5}}>VIEW ANALYSIS</span>
                        </button>  <br />
                    <button
                        onClick={async () => {
                            const result = await Confirm('Are you sure you want to delete this survey?', 
                                'Delete Survey');
                            
                            if (result) {
                                {this.deleteSurvey(_id)}
                            } else {
                                // Сonfirmation not confirmed
                            }
                            }}
                        className="buttonDelete" style={{ marginTop: '5px' }}>
                        <Delete color="white" style={{ fontSize: 18, marginTop: -2 }} />
                        <span style={{marginLeft: 5}}>DELETE SURVEY</span>
                        </button>
                 </div>
            </React.Fragment>
        );
    }
}
 
export default AdminSurveyItem;