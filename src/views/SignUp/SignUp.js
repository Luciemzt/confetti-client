import React from 'react';
import { useAuth } from '../../context/AuthContext.utils';
import {useHistory} from 'react-router-dom'


function Signup () {
    const [state, setState] = React.useState({email: "", password: ""})
    const handleChange = ({target}) => {
        setState({ ...state, [target.name]: target.value });
         };
    const {handleSignup} = useAuth();
    const {push}=useHistory();
    const handlesubmit = async (event) => {
        console.log('helloooo :>> ');
        event.preventDefault()
        await handleSignup(state)
        localStorage.setItem('islogged', 'true')
        push('/places')
    }
    return (
        <div className="loginBox">
        <form onSubmit={handlesubmit}>
            <label>Email</label>
            <input
                type="text"
                name="email"
                floatingLabelText="email"
                value={state.email}
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                floatingLabelText="password"
                value={state.password}
                onChange={handleChange}
            />
            <button type="submit">Sign-Up</button>
        </form>
        <p>
            Aleady have an account? <br />
            <a href="/login">Log in here</a>
         </p>
    </div>
            
    )
}

export default Signup;