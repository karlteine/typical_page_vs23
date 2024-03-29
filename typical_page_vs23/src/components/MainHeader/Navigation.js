import './Navigation.css'
import Button from '../UI/Button'
import React from 'react';


const Navigation = (props) => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href="/users">Users</a>
                </li>
                <li>
                    <a href="/admin">Admin</a>
                </li>
               {props.loggedIn && (
                    <li>
                        <Button onClick={props.onLogout}>Logout</Button>
                    </li>
               )}  
            </ul>
        </nav>
    )
}
/* export*/
export default Navigation