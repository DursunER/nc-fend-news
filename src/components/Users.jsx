import Articles from "./Articles";

const Users = ({users, isLoading, setCurrentUser}) => {

    
    const handleClick = (username) => {
        return setCurrentUser(username);
       
    };
    
    if (isLoading) {
        <p> Loading</p>
    }
    return (
        <div>
            <h2>Select Author to view articles</h2>
                <div className="users-container">
                    {users.map(({username, name, avatar_url}) => {
                        return (
                        <div key={username}>
                            <img src={avatar_url} alt={username} onClick={() => handleClick(username)}/>
                            <p>{username}</p>
                            <p>{name}</p>
                        </div>
                        )
                    })}
                </div>
                <Articles setCurrentUser = {setCurrentUser}/>
        </div>
    )
}

export default Users;