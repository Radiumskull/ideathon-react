import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../components/Register/Register';
import AdminLanding from '../pages/Admin/AdminLanding'

class Home extends React.Component{
    render(){
        return(
            <div className="body">
                    <Switch>
                        <Route path="/admin" exact component={AdminLanding} />
                        <Route path="/" exact component={Register} />    
                    </Switch>
            </div>
        );
    }
}

export default Home;