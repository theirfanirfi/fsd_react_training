import { useState } from 'react'
import UserDetail from './UserDetail'
const UserListComponent = () => {
    const [users, setUsers] = useState(
        [
            { id: 1, name: "Ali" },
            { id: 2, name: "Ahmad" },
            { id: 3, name: "Muhammad" },
            { id: 4, name: "Omer" },
            { id: 5, name: "Ali123" },
        ]
    )

    const [clickedUser, setClickedUser] = useState(users[0])

    return (
        <>
        <UserDetail user={clickedUser} />
            <ul>
                {users.map(user => <li onClick={() => setClickedUser(user)}>{user.name}</li>)
                }
            </ul>
        </>

    )
}

export default UserListComponent;