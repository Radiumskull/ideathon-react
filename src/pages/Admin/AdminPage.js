import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import * as regActions from '../../store/actions/regList';
import * as authActions from '../../store/actions/auth';


import AdminTopbar from '../../components/Admin/AdminTopbar';
import RegTypeDash from '../../components/Admin/RegTypeDash';


class AdminPage extends Component{
    state = {
        regTypes : {
            self : 0,
            group : 0,
            coorporate : 0,
            other : 0,
        }
    }
    tokenString = "Bearer " + this.props.token;
    async componentDidMount(){
        try{
            await this.props.regListUpdate(this.tokenString);
            const selfRes = await axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/self', { headers : { Authorization: this.tokenString }});
            const otherRes = await axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/other', { headers : { Authorization: this.tokenString }});
            const coorporateRes = await axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/coorporate', { headers : { Authorization: this.tokenString }});
            const groupRes = await axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/group', { headers : { Authorization: this.tokenString }});
            this.setState({
                regTypes : {
                    self : parseInt(selfRes.data.split(':')[1]),
                    other : parseInt(otherRes.data.split(':')[1]),
                    coorporate : parseInt(coorporateRes.data.split(':')[1]),
                    group : parseInt(groupRes.data.split(':')[1]),
                }
            });
        } catch(e){
            console.log(" ");
        }
    }

    clickHandler = (id) => {
        this.props.history.push('/admin/users/' + id);
    }



    render(){
        return( this.props.regList === null ? <div className="loader-center"><div className="lds-hourglass"></div></div> : 
        <div>
            <AdminTopbar logoutHandler={this.props.logoutHandler} token={this.props.token}/>
            <div className="adminBody">
                <RegTypeDash regTypes={this.state.regTypes}/>
                    <div className="table-wrapper">
                        <table className="fl-table">
                            <thead>
                                <tr className="table-header">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Ticket Number</th>
                                    <th>Registration Type</th>
                                </tr>
                            </thead>
                            <tbody>
                            { this.props.regList.map(reg => {
                                return (
                                    <tr key={reg._id} onClick={() => this.clickHandler(reg._id)}>
                                        <td>{reg._id}</td>
                                        <td>{reg.Fullname}</td>
                                        <td>{reg.EmailId}</td>
                                        <td>{reg.MobileNumber}</td>
                                        <td>{reg.TicketNumber}</td>
                                        <td>{reg.RegistrationType}</td>
                                    </tr>);
                                }) 
                            } 
                            </tbody> 
                        </table>
                </div>
            </div> 
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      regList : state.reg.regList,
      token : state.auth.token,
    }
  }
const mapDispatchToProps = dispatch => {
return {
    regListUpdate : (tokenString) => dispatch( regActions.regListUpdate(tokenString) ) ,
    logoutHandler : () => dispatch( authActions.logout() )
}
}
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(AdminPage));