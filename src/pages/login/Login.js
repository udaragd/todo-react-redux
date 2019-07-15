import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { checkLogin } from './../../services/auth.service';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            toDashboard: false,
        };
    }

    login = () => {
        if (this.state.userEmail === "" && this.state.userPassword === "") {
            toast.error('Please enter user email and password', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        else if (this.state.userEmail === "") {
            toast.error('Please enter user email', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        else if (this.state.userPassword === "") {
            toast.error('Please enter user password', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        else {
            checkLogin(this.state.userEmail, this.state.userPassword).then((res) => {
                // toast.success(res.data.message, {
                //     position: toast.POSITION.BOTTOM_RIGHT
                // });
                this.setState({ toDashboard: true });
            }, (err) => {
                toast.error(err.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
        }
    };

    render() {

        if (this.state.toDashboard === true) {
            return <Redirect to='/posts' />
        }

        return (
            <div className="container">
                <br /><br /><br />
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="form-group">
                            <input type="email" className="form-control" id="userEmail" placeholder="Enter email" onChange={(event) => this.setState({ userEmail: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="userPassword" placeholder="Enter Password" onChange={(event) => this.setState({ userPassword: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.login} style={{ width: "50%" }}>Login</button>
                            <button type="button" className="btn btn-danger" onClick={this.reset} style={{ width: "50% " }}>Reset</button>
                        </div>
                    </div>
                </div>
                <ToastContainer hideProgressBar={true} />
            </div >
        );
    }

}

export default Login;