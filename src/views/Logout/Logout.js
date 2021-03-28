import React from 'react';
import './Logout.css'
import { useAuth } from '../../context/AuthContext.utils';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';


function Logout () {
    const {handleLogout} = useAuth();
    const {push}=useHistory();

    const handleOnClick = async () => {
        await handleLogout()
        push('/')
        }
    return (
        <div>
            <Link onClick={handleOnClick}><i class="fas fa-sign-out-alt fa-lg" ></i>  </Link>
        </div>
            )
}

export default Logout;