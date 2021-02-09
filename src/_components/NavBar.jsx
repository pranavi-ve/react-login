import React from 'react'
import { Link } from 'react-router-dom'
import { userActions } from '../_actions';
import { history, Role } from '../_helpers';
import {userService} from "../_services";

export const NavBar = () => {
    let user = userService.currentUserValue;
    
    if(!user) return null;
    const isAuditor=user.role && user.role===Role.AUDITOR;
    const handleLogout = ()=>{
        userActions.logout(user._id);
        history.push('/login');
    }
    return (
        <div >
            <button onClick={handleLogout}>Logout</button>
            <Link to="/" >DashBoard</Link>
            {isAuditor && <Link to="/audit" >Audit</Link>}
        </div>
    )
}

