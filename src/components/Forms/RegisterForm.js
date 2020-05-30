import React, { useState } from 'react';
import axios from 'axios';



const RegisterForm = (props) => {
    const [ formData, setData ] = useState({ Fullname : '', EmailId : '', MobileNumber : '', RegistrationType : 'self', TicketNumber : '', IdCardUrl : ''})

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(formData)
        try{
            const submitResponse = await axios.post('http://127.0.0.1:8080/registration', formData);
            if(!submitResponse){
                console.log("Error Submitting");
                return
            }

            console.log(submitResponse.data)
        } catch(e){
            console.log(e);
        }
        
    }

    const inputHandler = (event) => {
        const text = event.target.value;
        const field = event.target.name;
        // console.log(text, field);
        switch(field){
            case 'name':
                setData({...formData, Fullname : text});
                break;
            case 'contact':
                setData({...formData, MobileNumber : text});
                break;
            case 'email':
                setData({...formData, EmailId : text});
                break;
            case 'tickets':
                setData({...formData, TicketNumber : text});
                break;
            case 'id-proof':
                setData({...formData, IdCardUrl : text});
                break;
            case 'regtype':
                setData({...formData, RegistrationType : text});
                break;
            default:
                break;
        }
        // console.log(formData)
    }
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
        <form className="event-form" onSubmit={submitHandler}>
            <h1>Register</h1>
            <label htmlFor="name">Name<input type="text" name="name" onChange={inputHandler} required/></label>
            <label htmlFor="email">Email<input type="email" name="email" onChange={inputHandler} required/></label>
            <label htmlFor="contact">Contact<input type="text" name="contact" onChange={inputHandler} pattern="[0-9]{10}" required/></label>
            
            <label htmlFor="regtype">Registration Type<select name="regtype" onChange={inputHandler}>
                <option value="self">Self</option>
                <option value="coorporate">Coorporate</option>
                <option value="group">Group</option>
                <option value="other">Other</option>
              </select></label>
            <label htmlFor="tickets">Tickets<input type="number" name="tickets" onChange={inputHandler} required/></label>
            <label htmlFor="id-proof">ID<input type="file" name="id-proof" onChange={inputHandler} required/></label>
            

            <button type="submit">Register</button>
            
            
        </form>
    </div>
    );
}

export default RegisterForm;