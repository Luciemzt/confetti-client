import React from 'react';
import './Login.css'
import { useAuth } from '../../context/AuthContext.utils';
import {useHistory} from 'react-router-dom'


function Login () {
    const [state, setState] = React.useState({email: "", password: ""})
    const handleChange = ({target}) => {
        setState({ ...state, [target.name]: target.value });
    };
    const {handleLogin} = useAuth();
    const {push}=useHistory();
    const handlesubmit = async (event) => {
        event.preventDefault()
        await handleLogin(state)
        localStorage.setItem('islogged', 'true')
        push('/place')
    }
    return (
        <div className="loginBox">
            <form onSubmit={handlesubmit}>
                <label>E-mail</label>
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
            <button type="submit">Login</button>
            <p>
            Not yes an user ? <br />
            <a href="/signup">Signup here</a>
            </p>
            </form>
        </div>
    )
}

export default Login;