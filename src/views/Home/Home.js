import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import {Button, Div} from './style.js'

//import {Button} from 'react-native';



function Home () {
    return (
        <Div>
        <div className='titre'>
        <h1>Let's start throwing confettiq to your life !</h1>
        </div>
        <div className='paragraphe'>
            <p> Start booking your next event with us ! </p>
        </div>
        <div className='start'>
        <Link to = "/signup"> <Button type="submit"> Sign up</Button></Link>
        <Link to = "/login"> <Button type="submit">Log In </Button></Link>
        </div>
        </Div>
    )
};

export default Home