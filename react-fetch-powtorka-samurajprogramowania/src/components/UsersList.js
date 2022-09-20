import './UsersList.css';

function UsersList(props) {
    // console.log('user list', props.users);
    const users = props.users.map(user => (
        <div key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last} />
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
        </div>
    ));
    return (
        <div className="users-list">
            {users}
        </div>
    );
}

export default UsersList;