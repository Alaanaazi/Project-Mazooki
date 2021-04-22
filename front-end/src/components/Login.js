import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/login.css';

class Login extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="pageStyle jumbotron vertical-center"> 
                    <div className="container p-3 cont w-50 white-grad">
                        <div className="container p-3 w-75 ">
                            <form style={{color: '#404f45'}}>
                                <div className="form-group text-left ara1">
                                    <label for="exampleInputEmail1">USERNAME</label>
                                    <input type="text" className="form-control inputF" />
                                </div>
                                <div className="form-group text-left ara1">
                                    <label for="exampleInputPassword1">PASSWORD</label>
                                    <input type="password" className="form-control inputF" />
                                </div>
                
                                <button type="submit" className="buttonLogin">LOGIN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Login;