import React from 'react';
import { AuthContext } from '../../context/AuthContext.utils';

function Logout () {
    const {handleLogout} = useAuth()
    return (
            <Button onClick={handleLogout}>Logout</Button>
    )
}

export default Logout;