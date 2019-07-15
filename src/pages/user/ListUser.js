import React, { Component } from 'react';
import './ListUser.css';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h1>List Users</h1>
                <ToastContainer hideProgressBar={true} />
            </div >
        );
    }
}

export default ListUser;