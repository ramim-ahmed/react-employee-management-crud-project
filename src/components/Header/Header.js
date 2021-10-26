import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './Header.css';
const Header = () => {
    return (
        <div>
           <Layout>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                        }} to='/employee'>Our Employers</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                        }} to='/add'>Add</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                        }} to='/update'>Update</NavLink>
                    </li>
                </ul>
            </nav>
           </Layout>
        </div>
    );
};

export default Header;