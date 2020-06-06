import React, { useState } from "react";



const RegisterForm = (props) => {
    const [error, setError ] = useState("");
    const imageValidation = (event) => {
        event.preventDefault();
        if(props.values.IdCard.type === 'image/jpeg' || props.values.IdCard.type === 'image/png'){
            props.previewButtonHandler();
        } else {
            setError("File Type not Supported");
        }
    }

    return(
        <div className="register-form">
        <form onSubmit={imageValidation}>
            <h1>Register Form</h1>
            <div>
                <label>Name</label>
                <input type="text" id="name" name="name" onChange={props.inputHandler} value={props.values.Fullname} required/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={props.inputHandler} value={props.values.EmailId} required/>
            </div>
            <div>
                <label>Contact</label>
                <input type="text" name="contact" onChange={props.inputHandler} value={props.values.MobileNumber} pattern="[0-9]{10}"required/>
            </div>
            <div>
                <label>Tickets</label>
                <input type="number" name="tickets" onChange={props.inputHandler} value={props.values.TicketNumber} min="1" required/>
            </div>
            <div>
                <label>Registration Type</label>
                <select name="regtype" onChange={props.inputHandler} value={props.values.RegistrationType}>
                    <option value="self">Self</option>
                    <option value="coorporate">Coorporate</option>
                    <option value="group">Group</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div>
                <label>ID Card</label>
                <input type="file" name="idcard" onChange={props.inputHandler} accept="image/*" required/>
                <p>{error}</p>
            </div>
            <button type="submit">Preview</button>
        </form>
        </div>
    );
}

export default RegisterForm;