import React from 'react';

const RegisteredTile = (props) => {
    return(
        <div className="registered-tile">
            <h2>{props.id}</h2>
            <h2>{props.name}</h2>
            <div>
                <h4>{props.email}</h4>
                <h5>{props.contact}</h5>
            </div>
            <div className='register-event-info'>
                <h4>{props.regtype}</h4>
                <h4>Tickets : {props.tickets}</h4>
            </div>
        </div>
    );
}

export default RegisteredTile;