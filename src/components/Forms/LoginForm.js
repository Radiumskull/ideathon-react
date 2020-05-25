import React from 'react';


const LoginForm = (props) => {
    return(
    <div className="login-container">
        <form action="">
            <h1>Log In</h1>
            <label htmlFor="Email">Email<input type="email" name="" id=""/></label>
            <label htmlFor="Password">Password<input type="password" /></label>
            <button>Log In</button>
        </form>
    </div>
    );
}

export default LoginForm;