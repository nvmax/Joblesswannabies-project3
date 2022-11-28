import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, {error}] = useMutation(LOGIN);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
                
            });
            const token = mutationResponse.data.login.token
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='form-align'>
            <h2 className='font-Poppins'>Login</h2>
            <form  onSubmit={handleFormSubmit}>
                <div className='font-Poppins-light'>
                    <label htmlFor='email'>Email</label>
                    <input className='input'
                    placeholder='Youremail@email.com'
                    name='email'
                    type='email'
                    id='email'
                    onChange={handleChange}/>
                </div>
                <div className ='font-Poppins-light'>
                    <label htmlFor='password'>Password</label>
                    <input className='input' placeholder='Password'
                    name='password'
                    type='password'
                    id='password'
                    onChange={handleChange}/>
                </div>
                {error ? (
                    <div>
                        <p>Incorrect username or password. Please try again.</p>
                    </div>
                ) : null}
                <div>
                    <button className='button' type='submit'>Login</button>
                </div>
            </form>
            <Link className='link font-Poppins-light' to="/signup">Don't have an account? Sign up</Link>
        </div>
    );
}

export default Login;