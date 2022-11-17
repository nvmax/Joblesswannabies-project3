import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input 
                    placeholder='youremail@email.com'
                    name='email'
                    type='email'
                    id='email'
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input placeholder='password'
                    name='password'
                    type='password'
                    id='password'
                    onChange={handleChange}/>
                </div>
            </form>
        </div>
    );
}

export default Login;