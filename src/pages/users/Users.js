import React from 'react';
import "./Users.css";
import { fetchUsers } from "../../services/fetchUsers"


class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []

        }
    }

    componentDidMount() {
        fetchUsers().then((users) => {
            this.setState({

                users: users

            })

        })
    }


    render() {
        console.log(this.state.users)
        const users = this.state.users

        if (!users) {
            return (<p>Loading...</p>)
        }


        return (
            <>
                <h2>Users:</h2>
                {users.map(user => (
                    <div>

                        <p>id: {user.id}</p>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>city: {user.city} </p>
                        <hr></hr>

                    </div>
                ))}
            </>
        )
    }

}
export { Users }

