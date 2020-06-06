import React from 'react';


const AdminTopbar = (props) => {

    return(
        <div className="adminTopbar">
            <button type="button" onClick={props.logoutHandler}>Log Out</button>
        </div>
    );
}

export default AdminTopbar;