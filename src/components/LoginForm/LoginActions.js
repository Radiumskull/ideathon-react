import axios from 'axios';


const signupHandler = async (email, password) => {
    console.log(email, password);
    const res = await axios.post('https://stackhack-backendserver.herokuapp.com/auth/register', { email : email, password : password});
    console.log(res.body);
    
}


export default signupHandler;