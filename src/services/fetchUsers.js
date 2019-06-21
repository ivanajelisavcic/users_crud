import { User } from "../entities/userEntity";

const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(usersArray => usersArray.map((user) => new User(user.id, user.name, user.username, user.email, user.address)))
}


const fetchSingleUser = (userId) => {
    // console.log(userId)
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then((user) => new User(user.id, user.name, user.username, user.email, user.address))
}


export {
    fetchUsers,
    fetchSingleUser
}

