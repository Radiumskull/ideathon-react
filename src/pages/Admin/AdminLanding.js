import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';

import * as actions from '../../store/actions/auth';
import Admin from '../../components/Admin/Admin';

class AdminLanding extends React.Component{

    render(){ 
        console.log(this.props.token)
        return(
            <div>
                {  !this.props.token ? <LoginForm /> : <Admin token={this.props.token} logoutHandler={this.props.logoutHandler}/> }  
            </div>   
        );
    }
}

const mapStateToProps = state => {
    return {
      token: state.token,
    }
  }
const mapDispatchToProps = dispatch => {
return {
    logoutHandler : () => dispatch( actions.logout() ) 
}
}



export default connect( mapStateToProps, mapDispatchToProps )(AdminLanding);