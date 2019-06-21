import React from 'react';
import "./UsersId.css";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../../services/fetchUsers";



class UsersId extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const id = (this.props.match.params.id)
        console.log(id)

        fetchSingleUser(id).then((user) => {
            this.setState({

                user: user
            })
        })
    }

    render() {
        // console.log(this.props);
        console.log(this.state.user)

        return (
            <>
                <p>Test UsersId</p>

                <table className="table">

                    <tbody>
                        <tr>
                            <td className="cellTitle">ID</td>
                            <td className="cellTitle">name</td>
                            <td className="cellTitle">username</td>
                            <td className="cellTitle">e-mail</td>
                            <td className="cellTitle" s>city</td>
                        </tr>
                        <tr>
                            <td className="cellTitle">{this.state.user.id}</td>
                            <td><Link to={`/users/usersedit`}>{this.state.user.name}</Link></td>
                            <td>{this.state.user.username}</td>
                            <td>{this.state.user.email}</td>
                            <td>{this.state.user.city} </td>
                        </tr>

                    </tbody>

                </table>
                <br />
            </>
        )
    }

}


export { UsersId }