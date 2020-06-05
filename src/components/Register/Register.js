import React, { useState } from 'react';


import RegisterForm from "./RegisterForm";
import PreviewForm from './PreviewForm';
import axios from 'axios';

import firebase from '../../config/firebase.js'



const Register = (props) => {
    // const [formState, setForm ] = useState({
    //     Fullname: '',
    //     EmailId: '', 
    //     MobileNumber: '', 
    //     RegistrationType: 'self', 
    //     TicketNumber: '', 
    //     IdCardUrl: '',
    //     IdCard: '',
    //     flag: false,
    //     uploadProgress : 0,
    //     error : ""
    // })
    const [formState, setForm ] = useState({
        Fullname: 'Aritra Bhattacharjee',
        EmailId: 'whoisaritra@gmail.com', 
        MobileNumber: '1234567891', 
        RegistrationType: 'self', 
        TicketNumber: '12', 
        IdCardUrl: '',
        IdCard: '',
        flag: false,
        uploadProgress : 0,
        error : ""
    })

    const inputHandler = (event) => {
        const text = event.target.value;
        const field = event.target.name;
        console.log(text, field);
        switch(field){
            case 'name':
                setForm({...formState, Fullname: text});
                break;
            case 'contact':
                setForm({...formState,  MobileNumber: text }); 
                break;
            case 'email':
                setForm({...formState,  EmailId: text });
                break;
            case 'tickets':
                setForm({...formState,  TicketNumber: text });
                break;
            case 'idcard':
                setForm({...formState,  IdCard : event.target.files[0] })
                break;
            case 'regtype':
                setForm({...formState,  RegistrationType: text });
                break;
            default:
                break;
        }
    }
    
    const submitHandler = async (event) => {
        event.preventDefault();
        const fileType = this.state.IdCard.type.split('/')[1];
        const fileName = this.state.MobileNumber + '.' + fileType;
        // console.log(this.state.IdCard) 

        const storage = firebase.storage();
        const uploadTask = storage.ref(`images/${fileName}`).put(this.state.IdCard);
        uploadTask.on("state_changed",
        snapshot => {
            this.setState({ uploadProgress : (Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100)})
        },
        error => {
            console.log(error);
        },
        () => {
            storage.ref('images').child(fileName).getDownloadURL().then(async url => {
                console.log(url)
                this.setState({ IdCardUrl : url })
                try{
                    const dbResponse = await axios.post('http://127.0.0.1:8080/registration', {
                        Fullname: this.state.Fullname,
                        EmailId: this.state.EmailId,
                        MobileNumber: this.state.MobileNumber,
                        RegistrationType: this.state.RegistrationType,
                        TicketNumber: this.state.TicketNumber,
                        IdCardUrl: url,
                    })
                    if(!dbResponse){
                        console.log("Error");
                    }
                } catch(e) {
                    console.log(e)
                }

            })
        }
        )
        console.log(this.state);      
    }

    const previewButtonHandler =  (event) =>{
        event.preventDefault();
        setForm({...formState, flag : !formState.flag })
    }
    const displayComponent = formState.flag === false ? <RegisterForm inputHandler={inputHandler} previewButtonHandler={previewButtonHandler} values={formState} /> : <PreviewForm previewButtonHandler={previewButtonHandler} submitHandler={submitHandler} values={formState} />;
    
    return(
        <div className="register-page">
            <div className="event-info">
                <h1>Ideathon</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae explicabo amet facilis alias perferendis fugit at labore quaerat velit aliquam nesciunt, architecto voluptatibus qui exercitationem dolore dignissimos repudiandae quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae explicabo amet facilis alias perferendis fugit at labore quaerat velit aliquam nesciunt, architecto voluptatibus qui exercitationem dolore dignissimos repudiandae quod!</p>
            </div>
            { displayComponent }
        </div>
    )
}

export default Register;