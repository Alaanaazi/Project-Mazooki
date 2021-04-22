import React, { Component } from 'react';
import Chart from "react-apexcharts";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/surveyAnalysis.css';

class SurveyAnalysisItem extends Component {
    state = {
        question: [],
        barChar: {
                    options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                    },
                    series: [
                    {
                        name: "series-1",
                        data: [30, 40, 45, 50, 49, 60, 70, 91]
                    }
                        ]
                }
    };

    renderTextGraph = (s, i) => {

        return <React.Fragment>
            
            <div className="ex1">
                        {this.state.question.questionAnswers.reverse().map(ans => 
                            <li> {ans} </li>
                        )}
            </div>
            

        </React.Fragment>
    }

    renderRadioGraph = (s, i) => {


        return <React.Fragment>
            <div className="nooga">
            <select value={this.state.val} class="form-select" aria-label="Default select example" onChange={this.onchangeVal}>
                <option value="1">Pie chart</option>
                <option value="2">Donut chart</option>
                </select>
            </div>
            
            {this.renderChart()}
        </React.Fragment>
    }

    renderCheckboxGraph = (s, i) => {
        


        return <React.Fragment>
            <div className="nooga">
            
                <select value={this.state.val} class="form-select" aria-label="Default select example" onChange={this.onchangeVal}>
                <option value="3">Bar chart</option>
                <option value="4">Line chart</option>
                </select>
                </div>

            {this.renderChart()}


        </React.Fragment>
    }

    onchangeVal = e => {
        this.setState({ val: e.target.value });
        console.log(this.state.val);
    }

    renderBarChart = () => {
        let pieChartCategories = [];
        

        for (let index = 0; index < this.state.question.answers.length; index++) {
            pieChartCategories=[...pieChartCategories,this.state.question.answers[index].options];
            
        }

        let pieChartData =[]
        for (let index = 0; index < pieChartCategories.length; index++) {
            pieChartData[index] = 0;
            
        }

        

        for (let index = 0; index < this.state.question.questionAnswers.length; index++) {
            for (let l = 0; l < pieChartCategories.length; l++) {

                if (this.state.question.questionAnswers[index]==pieChartCategories[l]) {
                    pieChartData[l] = pieChartData[l] + 1;
                }
                
            }
            
        }

        let barChar= {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [...pieChartCategories]
            }
            },
            series: [
            {
                name: "series-1",
                data: [...pieChartData]
            }
                ]
        }

        return <React.Fragment>
                <Chart
                    options={barChar.options}
                    series={barChar.series}
                    type="bar"
                    width="100%"
                    height="400"
                />
            </React.Fragment>

    }

    renderPolarAreaChart = () => {
        let pieChartCategories = [];
        

        for (let index = 0; index < this.state.question.answers.length; index++) {
            pieChartCategories=[...pieChartCategories,this.state.question.answers[index].options];
            
        }

        let pieChartData =[]
        for (let index = 0; index < pieChartCategories.length; index++) {
            pieChartData[index] = 0;
            
        }

        

        for (let index = 0; index < this.state.question.questionAnswers.length; index++) {
            for (let l = 0; l < pieChartCategories.length; l++) {

                if (this.state.question.questionAnswers[index]==pieChartCategories[l]) {
                    pieChartData[l] = pieChartData[l] + 1;
                }
                
            }
            
        }

        let lineChart = {
          
            series: [{
              name: 'Responses',
              data: [...pieChartData]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              stroke: {
                width: 7,
                curve: 'smooth'
              },
              xaxis: {
                categories: [...pieChartCategories],
                tickAmount: 10,
              },
              title: {
                text: 'Social Media',
                align: 'left',
                style: {
                  fontSize: "16px",
                  color: '#666'
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#02c449'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100, 100, 100]
                },
              },
              markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                  size: 7,
                }
              }
            },
          
          
          };
        

        return <div>
                <Chart
                    options={lineChart.options}
                    series={lineChart.series}
                    type="line"
                    width="100%"
                    height="400"
                />
            </div>

    }

    renderDonutChart = () => {
        let pieChartCategories = [];
        

        for (let index = 0; index < this.state.question.answers.length; index++) {
            pieChartCategories=[...pieChartCategories,this.state.question.answers[index].options];
            
        }

        let pieChartData =[]
        for (let index = 0; index < pieChartCategories.length; index++) {
            pieChartData[index] = 0;
            
        }

        

        for (let index = 0; index < this.state.question.questionAnswers.length; index++) {
            for (let l = 0; l < pieChartCategories.length; l++) {

                if (this.state.question.questionAnswers[index]==pieChartCategories[l]) {
                    pieChartData[l] = pieChartData[l] + 1;
                }
                
            }
            
        }

        let pieChart= {
            options: {labels: [...pieChartCategories]},
            series: [...pieChartData],
            
        }

        return <div>
            <Chart
                        options={pieChart.options}
                series={pieChart.series}
                        type="donut"
                        width="100%"
                        height="400" />
            </div>

    }

    renderPieChart = () => {
        let pieChartCategories = [];
        

        for (let index = 0; index < this.state.question.answers.length; index++) {
            pieChartCategories=[...pieChartCategories,this.state.question.answers[index].options];
            
        }

        let pieChartData =[]
        for (let index = 0; index < pieChartCategories.length; index++) {
            pieChartData[index] = 0;
            
        }

        

        for (let index = 0; index < this.state.question.questionAnswers.length; index++) {
            for (let l = 0; l < pieChartCategories.length; l++) {

                if (this.state.question.questionAnswers[index]==pieChartCategories[l]) {
                    pieChartData[l] = pieChartData[l] + 1;
                }
                
            }
            
        }

        let pieChart= {
            options: {labels: [...pieChartCategories]},
            series: [...pieChartData]
            
        }

        return <React.Fragment>
            <Chart
                        options={pieChart.options}
                series={pieChart.series}
                        type="pie"
                        width="100%"
                        height="400"
                        />
            </React.Fragment>

    }

    renderChart = () => {
       

        
        if(this.state.val == 3) {
            return this.renderBarChart();
         }

        if(this.state.val == 4) {
            return this.renderPolarAreaChart();
         }

        if(this.state.val == 1) {
           return this.renderPieChart();
        }

        if(this.state.val == 2) {
            return this.renderDonutChart();
        }

        
    }

    display = (s,i) => {
        if (s.type === "text") {
            return this.renderTextGraph(s,i)
        }

        if (s.type === "radio") {
            return this.renderRadioGraph(s,i)
        }

        if (s.type === "checkbox") {
            return this.renderCheckboxGraph(s,i)
        }
        
    }

    componentDidMount() {
        this.setState({ question: this.props.question })
        
        if(this.props.question.type === 'checkbox') {
            this.setState({ val: '3' });
        }

        if(this.props.question.type === 'radio') {
            this.setState({ val: '1' });
        }

          
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div class="container p-3 contSurveys white-grad w-75">


                
                <div className="itemSet fuse"> 
                        <label for="exampleInputPassword1">Q{this.props.i + 1} : {this.state.question.question}</label>
                </div>

                {this.display(this.state.question,this.props.i)}    

                
                </div>
                        
            </React.Fragment>
         );
    }
}
 
export default SurveyAnalysisItem;