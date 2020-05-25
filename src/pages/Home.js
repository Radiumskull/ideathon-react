import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterForm from '../components/Forms/RegisterForm';
import LoginForm from '../components/Forms/LoginForm';
import AdminPage from '../pages/AdminPage'

const Home = () => {
    return(
        <div className="body">
                <Switch>
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/register" exact component={RegisterForm} />
                    <Route path="/admin" exact component={AdminPage} />
                    <Route path="/" render={props => <h1>Home Page</h1>} />
                    
                </Switch>
        </div>
    );
}

export default Home;