import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Home';
import Login from './components/Login';
import ViewSurveys from './components/ViewSurveys';
import AddSurvey from './components/AddSurvey';
import AdminViewSurveyList from './components/AdminViewSurveyList';
import ViewSurveyItem from './components/ViewSurevyItem';
import SurveyAnalysis from './components/SurveyAnalysis';
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
      <Router>
        <Header />
          <Route exact path="/" component={Logo} />
          <Route path="/login" component={AdminViewSurveyList} />
          <Route path="/view-surveys" component={ViewSurveys} />
      <Route path="/view-survey-item/:id" exact component={ViewSurveyItem} />
      <Route path="/survey-analysis/:id" exact component={SurveyAnalysis} />
      
      <Route path="/create-survey" component={AddSurvey} />
     
      <Footer />
      
      </Router>
  );
}

export default App;


/*


*/
