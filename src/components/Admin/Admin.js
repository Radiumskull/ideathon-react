import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTopbar from './AdminTopbar';
import RegTypeDash from './RegTypeDash';
import { withRouter } from 'react-router-dom';

const Admin = (props) => {
    const [ regList, updateList ] = useState([]);
    const tokenString = "Bearer " + props.token;
    useEffect(() => {
        
        axios.get("https://stackhack-backendserver.herokuapp.com/reg/registration", { headers : { Authorization: tokenString }}).then(res => {
            console.log(res.data);
            updateList(res.data.Registrations);
        }).catch(err => {
            console.log(err);
        });
        
    }, []);

    const clickHandler = (id) => {
        props.history.push('/admin/users/' + id);
    }
    const displayList = regList.map(reg => {
        return (
            <tr key={reg._id} onClick={() => clickHandler(reg._id)}>
                <td>{reg._id}</td>
                <td>{reg.Fullname}</td>
                <td>{reg.EmailId}</td>
                <td>{reg.MobileNumber}</td>
                <td>{reg.TicketNumber}</td>
                <td>{reg.RegistrationType}</td>
            </tr>);
    }) 


    return(
    regList.length === 0 ? <div className="loader-center"><div className="lds-hourglass"></div></div> : <div>
        <AdminTopbar logoutHandler={props.logoutHandler} token={props.token}/> 
        <div className="adminBody">
        <RegTypeDash tokenString={props.token}/>
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
                    { displayList }  
                </tbody> 
            </table>
        </div>
        </div>
    </div>);
}

export default withRouter(Admin);