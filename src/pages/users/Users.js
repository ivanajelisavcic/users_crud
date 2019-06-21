import React from 'react';
import "./Users.css";
import { Link } from "react-router-dom";
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
        const users = this.state.users

        if (!users) {
            return (<p>Loading...</p>)
        }


        return (
            <>
                <br />


                <table className="table">

                    <tr>
                        <td className="cellTitle">ID</td>
                        <td className="cellTitle">name</td>
                        <td className="cellTitle">username</td>
                        <td className="cellTitle">e-mail</td>
                        <td className="cellTitle" s>city</td>
                    </tr>

                    {users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.city} </td>
                        </tr>

                    ))}

                </table>
                <br />            </>
        )
    }

}
export { Users }

