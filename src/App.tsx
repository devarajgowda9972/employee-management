import React, { useState } from 'react';
import './index.css';
import { Employee } from './Models/Employee';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      designation: 'Software Engineer',
    },
  ]);

  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const handleAddOrUpdate = (employee: Employee) => {
    setEmployees(prev =>
      prev.some(emp => emp.id === employee.id)
        ? prev.map(emp => (emp.id === employee.id ? employee : emp))
        : [...prev, employee]
    );
    setEditingEmployee(null);
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  const handleDelete = (id: number) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
    if (editingEmployee?.id === id) setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>
      <EmployeeForm
        onSubmit={handleAddOrUpdate}
        editingEmployee={editingEmployee}
        cancelEdit={handleCancelEdit}
      />
      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
