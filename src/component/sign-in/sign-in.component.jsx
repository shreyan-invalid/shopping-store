import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password }= this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        }catch(error){
            console.log(error);
        }

        this.setState({ email:'', password:'' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput type='email' name="email"  handleChange={this.handleChange} value={this.state.email} label="Email" required />
                    
                    <FormInput type='password' name="password"  handleChange={this.handleChange} value={this.state.password} label="Password" required/>
                    
                    <div className='button'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton type="submit" onClick={ signInWithGoogle } isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;