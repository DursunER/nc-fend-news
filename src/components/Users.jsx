import { useState } from "react";


const Users = ({users, isLoading }) => {
    
    const [currentUser, setCurrentUser] = useState([]);

    if (isLoading) return <p>Loading...</p>
    else return (
        <div>
            <h2>Select Author to view articles</h2>
                <div className="users-container">
                    {users.map(({username, name, avatar_url}) => {
                        return (
                        <div key={username}>
                            <img src={avatar_url} alt={username} onClick={() => setCurrentUser(username)}/>
                            <p>{username}</p>
                            <p>{name}</p>
                        </div>
                        )
                    })}
                </div>
           
        </div>
    )
}

export default Users;