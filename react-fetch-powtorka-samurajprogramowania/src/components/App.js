import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';
import { useState } from 'react';

const API = `https://randomuser.me/api/?results=1`;

function App() {
  const [users, setUsers] = useState([]);

  const handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        // console.log('data: ', data);
        const user = data.results;
        // setUsers(prevUsers => prevUsers.concat(user));
        setUsers(prevUsers => [...prevUsers, ...user]);
      })
      .catch(error => console.log('error', error))
  }

  return (
    <div className="App">
      <ButtonFetchUsers click={handleDataFetch} />
      {users.length > 0 ? <UsersList users={users} /> : users}
    </div>
  );
}

export default App;
