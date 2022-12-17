import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (name, age) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
