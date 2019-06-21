import React from 'react';
import "../App.css"



const Header = () => {
    return (
        <>
            <div>
                <br />
                <h1>Users CRUD</h1>
                <ul className="nav nav-pills nav-fill" >
                    <li className="header nav-item">
                        <a className="nav-link " href="#">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Users ID</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Users Edit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Users Create</a>
                    </li>
                </ul>
            </div>
        </>

    );
}

export { Header };