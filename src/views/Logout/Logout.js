import React from 'react';
import { useAuth } from '../../context/AuthContext.utils';
import {useHistory} from 'react-router-dom'

function Logout () {
    const {handleLogout} = useAuth();
    const {push}=useHistory();

    const handleOnClick = async () => {
        await handleLogout()
        push('/')
        }
    return (
        <div>
            <button onClick={handleOnClick}> Logout </button>
        </div>
            )
}

export default Logout;