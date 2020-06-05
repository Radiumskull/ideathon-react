import React, { useState } from 'react';
import signupHandler from './LoginActions';

// class EntryPage extends Component {
const LoginForm = (props) => {
    const [ formState, setForm ] = useState({
      email : "",
      password : ""
    });
    const [ currentView, setView ] = useState(true)

    const inputHandler = (event) => {
      const text = event.target.value;
      const field = event.target.name;
      switch(field){
        case "email":
          setForm({...formState, username : text})
          break;
        
        case "password":
          setForm({...formState, password : text})
          break;

        default:
          break;
      }
    }
    const changeView = () => {
      setView(!currentView);
    }
    const submitHandler = (event) => {
      event.preventDefault();
      if(!currentView){
        signupHandler(formState.email, formState.password);
      }
    }

    const loginForm = (
      <form onSubmit={submitHandler}>
        <h2>Admin</h2>
        <fieldset>
          <legend>Log In</legend>
          <ul>
            <li>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" onChange={inputHandler} required/>
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" onChange={inputHandler} required/>
            </li>
            <li>
              <i/>
            </li>
          </ul>
        </fieldset>
        <button>Login</button>
        <button type="button" onClick={changeView}>Create Account</button>
      </form>
    );

    const signupForm = (
      <form onSubmit={submitHandler}>
        <h2>Admin</h2>
        <fieldset>
          <legend>Sign Up</legend>
          <ul>
            <li>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" onChange={inputHandler} required/>
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" onChange={inputHandler} required/>
            </li>
            <li>
              <i/>
            </li>
          </ul>
        </fieldset>
        <button>Sign Up</button>
        <button type="button" onClick={changeView}>Already Registered?</button>
      </form>
    );
    return (
      <section id="entry-page">
          {currentView === true ? loginForm : signupForm}
      </section>
    )
  }

export default LoginForm;