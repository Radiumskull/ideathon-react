import React from 'react';


import Register from "../Register/Register";
import PreviewForm from '../PreviewForm/PreviewForm';



// const RegisterForm = (props) => 
class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Fullname: '',
            EmailId: '', 
            MobileNumber: '', 
            RegistrationType: 'self', 
            TicketNumber: '', 
            IdCardUrl: '',
            flag: false
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.registerSubmitHandler = this.registerSubmitHandler.bind(this);
        this.displayComponent = this.displayComponent.bind(this);
    }
    
    // const [ formData, setData ] = useState({ Fullname : '', EmailId : '', MobileNumber : '', RegistrationType : 'self', TicketNumber : '', IdCardUrl : ''})

    // submitHandler = async (event) => {
    //     event.preventDefault();
    //     // console.log(formData)
    //     try{
    //         const submitResponse = await axios.post('http://127.0.0.1:8080/registration', formData);
    //         if(!submitResponse){
    //             console.log("Error Submitting");
    //             return
    //         }

    //         console.log(submitResponse.data)
    //     } catch(e){
    //         console.log(e);
    //     }
        
    // }
    registerSubmitHandler =  (e) =>{
        e.preventDefault();
        this.setState((prevState) => ({ flag: !prevState.flag }));
        // this.displayComponent();
    }
    displayComponent = ()=>{
        if(this.state.flag === false)
            return <Register 
                        submitAction={this.registerSubmitHandler}
                        registerInputHandler={this.inputHandler}
                        values={this.state}
                    />
        else
            return <PreviewForm 
                        submitAction={this.registerSubmitHandler}
                        values={this.state}
                    />
        // console.log(this.state.flag);
    }
    inputHandler = (event) => {
        const text = event.target.value;
        const field = event.target.name;
        // console.log(text, field);
        switch(field){
            case 'name':
                // setData({...formData, Fullname : text});
                this.setState({Fullname: text});
                break;
            case 'contact':
                // setData({...formData, MobileNumber : text});
                this.setState({ MobileNumber: text }); 
                break;
            case 'email':
                // setData({...formData, EmailId : text});
                this.setState({ EmailId: text });
                break;
            case 'tickets':
                // setData({...formData, TicketNumber : text});
                this.setState({ TicketNumber: text });
                break;
            case 'id-proof':
                // setData({...formData, IdCardUrl : text});
                this.setState({ IdCardUrl: text });
                break;
            case 'regtype':
                // setData({...formData, RegistrationType : text});
                this.setState({ RegistrationType: text });
                break;
            default:
                break;
        }
        // console.log(formData)
    }
    render(){
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
                {this.displayComponent()}
            </div>
        )
    }
}

export default RegisterForm;