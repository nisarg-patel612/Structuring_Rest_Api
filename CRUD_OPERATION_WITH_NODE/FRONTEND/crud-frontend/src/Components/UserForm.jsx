import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers, editUser, setEditUser }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editUser) {
      await axios.put(`http://localhost:5000/api/users/${editUser._id}`, formData);
    } else {
      await axios.post('http://localhost:5000/api/users', formData);
    }
    fetchUsers();
    setFormData({ name: '', email: '' });
    setEditUser(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">{editUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
