import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const userList = useSelector((state) => state.user.value);

  return (
    <div>
      <div className='addUser'>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Username' />
        <button>Add user</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => <h1>{user.name}</h1>)}
      </div>
    </div>
  )
}

export default App