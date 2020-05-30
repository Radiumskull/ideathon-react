import React from "react";

import "../../styles/Register.css";

class Register extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <form className="event-form" onSubmit={this.props.submitAction}>
                    <h1>Register</h1>
                    <label htmlFor="name">Name<input type="text" name="name" value={this.props.values.Fullname} onChange={this.props.registerInputHandler} required /></label>
                    <label htmlFor="email">Email<input type="email" name="email" value={this.props.values.EmailId} onChange={this.props.registerInputHandler} required /></label>
                    <label htmlFor="contact">Contact<input type="text" name="contact" value={this.props.values.MobileNumber} onChange={this.props.registerInputHandler} pattern="[0-9]{10}" required /></label>

                    <label htmlFor="regtype">Registration Type<select name="regtype" value={this.props.values.RegistrationType} onChange={this.props.registerInputHandler}>
                        <option value="self">Self</option>
                        <option value="coorporate">Coorporate</option>
                        <option value="group">Group</option>
                        <option value="other">Other</option>
                    </select></label>
                    <label htmlFor="tickets">Tickets<input type="number" name="tickets" value={this.props.values.TicketNumber} onChange={this.props.registerInputHandler} required /></label>
                    <label htmlFor="id-proof">ID<input type="file" name="id-proof" onChange={this.props.registerInputHandler} required /></label>


                    <button type="submit">Register</button>

                </form>
            </div>
        )
    }
}

export default Register;