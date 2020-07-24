import React from 'react';

import { Link, useHistory } from 'react-router-dom';

const Header = props => {
    const { loggedIn, setLoggedIn } = props;

    const { push } = useHistory()

    const handleLogOut = event => {
        event.preventDefault()
        localStorage.removeItem('token')
        setLoggedIn(false)
        push("/")
    }

    return (
        <div>
             <h1>Bubbles</h1>
                <ul>
                    { loggedIn
                      ? (
                            <>
                                <li><Link to="/bubbles">Bubbles</Link></li>
                                <li><a href="/#" onClick={handleLogOut}>Log Out</a></li>
                            </>
                      )
                      : <li><Link to="/login">Log In</Link></li>
                    }
                </ul>
        </div>
    )
}

export default Header