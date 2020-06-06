import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTopbar from './AdminTopbar';
import RegisteredTile from './RegisteredTile';

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
        const regType = reg.RegistrationType;
        return (
            <div key={reg._id}>
                <RegisteredTile id={reg._id} name={reg.Fullname} email={reg.EmailId} tickets={reg.TicketNumber} regtype={reg.RegistrationType} contact={reg.MobileNumber}/>
            </div>);
    }) 
    return(
    <div>
        <AdminTopbar logoutHandler={props.logoutHandler}/> 
        { displayList }   
    </div>);
}

export default Admin;