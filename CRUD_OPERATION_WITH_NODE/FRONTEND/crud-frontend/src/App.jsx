import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './Components/UserForm';
import UserTable from './Components/UserTable';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  const handleEdit = user => {
    setEditUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <UserForm fetchUsers={fetchUsers} editUser={editUser} setEditUser={setEditUser} />
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
