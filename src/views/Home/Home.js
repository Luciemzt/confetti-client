import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
//import {Button} from 'react-native';



function Home () {
    return (
        <div>
        <div className='titre'>
        <h1>Let's throw confetti to your life !</h1>
        </div>
        <div className='paragraphe'>
            <p> Start booking your next event with us ! </p>
        </div>
        <div className='start'>
        <Link to = "/signup"> <button type="submit"> Sign up</button></Link>
        <Link to = "/login"> <button type="submit">Log In </button></Link>
        </div>
        </div>
    )
};

export default Home