import React, { useState } from 'react';

// class EntryPage extends Component {
const LoginForm = (props) => {
    const [ formState, setForm ] = useState({
      username : "",
      password : ""
    });

    const inputHandler = (event) => {
      const text = event.target.value;
      const field = event.target.name;
      switch(field){
        case "username":
          setForm({...formState, username : text})
          break;
        
        case "password":
          setForm({...formState, password : text})
          break;

        default:
          break;
      }
    }

    const submitHandler = (event) => {
      event.preventDefault();
      console.log(formState)
    }

    return (
      <section id="entry-page">
          <form onSubmit={submitHandler}>
            <h2>Admin</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" name="username" onChange={inputHandler} required/>
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
          </form>
      </section>
    )
  }

export default LoginForm;