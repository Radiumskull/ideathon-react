import React from "react";

import "../../styles/PreviewForm.css";

class PreviewForm extends React.Component{
    render(){
        return(
            <div>
                <form className="event-form" onSubmit={this.props.submitAction}>
                    <h1>Preview</h1>
                    <label htmlFor="name">Name<input type="text" name="name" value={this.props.values.Fullname} disabled /></label>
                    <label htmlFor="email">Email<input type="email" name="email" value={this.props.values.EmailId} disabled /></label>
                    <label htmlFor="contact">Contact<input type="text" name="contact" value={this.props.values.MobileNumber} disabled /></label>

                    <label htmlFor="regtype">Registration Type<select name="regtype" value={this.props.values.RegistrationType} disabled>
                        <option value="self">Self</option>
                        <option value="coorporate">Coorporate</option>
                        <option value="group">Group</option>
                        <option value="other">Other</option>
                    </select></label>
                    <label htmlFor="tickets">Tickets<input type="number" name="tickets" value={this.props.values.TicketNumber} disabled /></label>
                    {/* <label htmlFor="id-proof">ID<input type="file" name="id-proof" value={this.props.values.IdCardUrl} disabled /></label> */}


                    <button type="submit">Make Changes</button>
                    <button type="submit">Final Submit</button>

                </form>
            </div>
        )
    }
}

export default PreviewForm;