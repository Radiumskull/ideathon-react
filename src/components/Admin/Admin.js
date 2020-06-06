import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTopbar from './AdminTopbar';

const Admin = (props) => {
    const [ regList, updateList ] = useState([]);
    useEffect(() => {
        const tokenString = "Bearer " + props.token;
        console.log(props);
        axios.get("https://stackhack-backendserver.herokuapp.com/reg/registration", { headers : { Authorization: tokenString }}).then(res => {
            console.log(res.data);
            updateList(res.data.Registrations);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const displayList = regList.map(reg => {
        return (
            <tr key={reg._id}>
                <td>{reg._id}</td>
                <td>{reg.Fullname}}</td>
                <td>{reg.EmailId}</td>
                <td>{reg.MobileNumber}</td>
                <td>{reg.TicketNumber}</td>
                <td>{reg.RegistrationType}</td>
            </tr>);
    }) 
    return(
    regList.length === 0 ? <div className="lds-hourglass"></div> : <div>
        <AdminTopbar logoutHandler={props.logoutHandler}/> 
        <table className="reg-table">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Ticket Number</th>
            <th>Registration Type</th>
        </tr>
        { displayList }   
        </table>
    </div>);
}

export default Admin;