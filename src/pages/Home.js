import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../components/Register/Register';
import LoginForm from '../components/LoginForm/LoginForm';
import AdminPage from '../pages/AdminPage'

const Home = () => {
    return(
        <div className="body">
                <Switch>
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/admin" exact component={AdminPage} />
                    <Route path="/" exact component={Register} />
                    
                </Switch>
        </div>
    );
}

export default Home;