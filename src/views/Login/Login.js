import React from 'react';
import { useAuth } from '../../context/AuthContext.utils';
import {useHistory} from 'react-router-dom'
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Container } from 'react-bootstrap';
import { LoginBox, Button} from './style.js'

function Login () {
    const [state, setState] = React.useState({email: "", password: ""})
    const handleChange = ({target}) => {
        setState({ ...state, [target.name]: target.value });
    };
    const {handleLogin, error} = useAuth();
    const {push}=useHistory();
    const handlesubmit = async (event) => {
        event.preventDefault()
        await handleLogin(state)
        localStorage.setItem('islogged', 'true')
        push('/place')
    }
    return (
        <div>
            <Container fluid="md">
            <Navigation />
            <form onSubmit={handlesubmit}>
           <LoginBox>
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
            <Button type="submit">Login</Button>
            <p>{error}</p>
            <p>
            Not yes an user ? <br />
            <a href="/signup">Signup here</a>
            </p>
            </LoginBox>
            </form>
        <Footer/>
        </Container>
        </div>
    )
}

export default Login;