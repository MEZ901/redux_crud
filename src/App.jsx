import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/users/UsersSlice';
import { useState, useEffect } from 'react';

const App = () => {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("8");

  return (
    <div>
      <div className='addUser'>
        <input type="text" placeholder='Name' onChange={(e) => {setName(e.target.value)}} />
        <input type="text" placeholder='Username' onChange={(e) => {setUsername(e.target.value)}} />
        <button onClick={() => {dispatch(addUser({id: userList[userList.length - 1].id + 1, name, username }))}}>Add user</button>
      </div>
      <div className='displayUsers'>
        <ul>
          {userList.map(user =>
          <li key={user.id}><h1>{user.name} - {user.username}</h1></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App