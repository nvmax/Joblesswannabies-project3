import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

function SignUp (props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token=mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='form-align'>
            <h2 className='font-Poppins'>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <div className='font-Poppins-light'>
                    <label htmlFor='firstName'>First Name</label>
                    <input className='input'
                    placeholder='firstName'
                    name='firstName'
                    type='firstName'
                    id='firstName'
                    onChange={handleChange}/>
                </div>
                <div className='font-Poppins-light'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input className='input'
                    placeholder='lastName'
                    name='lastName'
                    type='lastName'
                    id='lastName'
                    onChange={handleChange}/>
                </div>
                <div className='font-Poppins-light'>
                    <label htmlFor='email'>Email</label>
                    <input className='input'
                    placeholder='youremail@email.com'
                    name='email'
                    type='email'
                    id='email'
                    onChange={handleChange}/>
                </div>
                <div className='font-Poppins-light'>
                    <label htmlFor='password'>Password</label>
                    <input className='input' placeholder='password'
                    name='password'
                    type='password'
                    id='password'
                    onChange={handleChange}/>
                </div>
                <div>
                    <button className='button' type='submit'>Submit</button>
                </div>
            </form>
            <Link className='link font-Poppins-light' to="/login">Already have an account? Log in</Link>
        </div>
    );
}

export default SignUp;