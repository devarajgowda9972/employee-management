import React, { useEffect, useState } from 'react';
import { Employee } from '../Models/Employee';

interface Props {
  onSubmit: (employee: Employee) => void;
  editingEmployee: Employee | null;
  cancelEdit: () => void;
}

const EmployeeForm: React.FC<Props> = ({ onSubmit, editingEmployee, cancelEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setEmail(editingEmployee.email);
      setDesignation(editingEmployee.designation);
    } else {
      setName('');
      setEmail('');
      setDesignation('');
    }
  }, [editingEmployee]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee: Employee = {
      id: editingEmployee ? editingEmployee.id : Date.now(),
      name,
      email,
      designation,
    };
    onSubmit(newEmployee);
    setName('');
    setEmail('');
    setDesignation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingEmployee ? 'Edit Employee' : 'Add New Employee'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Designation"
        value={designation}
        required
        onChange={(e) => setDesignation(e.target.value)}
      />
      <button type="submit">{editingEmployee ? 'Update' : 'Add'} Employee</button>
      {editingEmployee && (
        <button type="button" onClick={cancelEdit} style={{ marginLeft: '10px', backgroundColor: '#999' }}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default EmployeeForm;
