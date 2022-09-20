import './ButtonFetchUsers.css';

function ButtonFetchUsers(props) {
    return (
        <div className="ButtonFetchUsers">
            <button onClick={props.click}>dodaj uzytkownika</button>
        </div>
    );
}

export default ButtonFetchUsers;