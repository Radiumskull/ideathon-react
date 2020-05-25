import React from 'react';


const RegisterForm = (props) => {
    console.log(props);
    return(
        <div className="register-form">
        <div className="event-info">
            <div className="info-content">
                <h1>Ideathon</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam consequuntur sed eos minima libero, nesciunt vel odit sint hic, quod omnis aut. Qui soluta nulla corporis aliquid, quo sequi?</p>
                <span>
                    <strong>Date : 29.02.2020</strong>
                    <strong>Venue : Block B, BPPIMT</strong>
                </span>
            </div>
        </div>
        <form className="event-form">
            <h1>Register</h1>
            <label htmlFor="">Name<input type="text" /></label>
            <label htmlFor="">Email<input type="text" /></label>
            <label htmlFor="">Contact<input type="text" /></label>
            
            <label htmlFor="">Registration Type<select name="cars" id="cars">
                <option value="self">Self</option>
                <option value="coorporate">Coorporate</option>
                <option value="group">Group</option>
                <option value="other">Other</option>
              </select></label>
            <label htmlFor="">Tickets<input type="number" /></label>
            <label htmlFor="">ID<input type="file" /></label>
            

            <button>Register</button>
            
            
        </form>
    </div>
    );
}

export default RegisterForm;