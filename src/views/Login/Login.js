import React from 'react';
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
        <div>
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
            </form>

        </div>
    )
}

export default Login;