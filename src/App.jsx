import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/users/UsersSlice';
import { useState, useEffect } from 'react';

const App = () => {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <div className='addUser'>
        <input type="text" placeholder='Name' onChange={(e) => {setName(e.target.value)}} />
        <input type="text" placeholder='Username' onChange={(e) => {setUsername(e.target.value)}} />
        <button onClick={() => {dispatch(addUser({id: (userList?.[userList.length - 1]?.id ?? 0) + 1, name, username }))}}>Add user</button>
      </div>
      <div className='displayUsers'>
        <ul>
          {userList.map(user =>
          <li key={user.id}>
            <h1>{user.name} - {user.username}</h1>
            <input type="text" placeholder='New name' onChange={(e) => {setNewName(e.target.value)}} />
            <input type="text" placeholder='New username' onChange={(e) => {setNewUsername(e.target.value)}} />
            <button onClick={() => {dispatch(updateUser({id: user.id, name: newName, username: newUsername}))}}>Update username</button>
            <button onClick={() => {dispatch(deleteUser({id: user.id}))}}>delete</button>
          </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App