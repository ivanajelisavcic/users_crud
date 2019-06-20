import { User } from "../entities/userEntity";

const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(usersArray => usersArray.map((user) => new User(user)))
}




export { fetchUsers }


// users.id, users.name, users.username, users.email, users.address