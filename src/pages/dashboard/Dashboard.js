import React, { Component } from 'react';
import './Dashboard.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <ToastContainer hideProgressBar={true} />
            </div>
        );
    }
}

export default Dashboard;