import React from 'react';



const Header = () => {
    return (
        <>
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Users</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Users ID</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Users Create</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >Users Edit</a>
                </li>
            </ul>
        </>

    );
}

export { Header };