import React from 'react';
import { Employee } from '../Models/Employee';

interface Props {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

const EmployeeList: React.FC<Props> = ({ employees, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {employees.map(emp => (
    <tr key={emp.id}>
      <td data-label="ID">{emp.id}</td>
      <td data-label="Name">{emp.name}</td>
      <td data-label="Email">{emp.email}</td>
      <td data-label="Designation">{emp.designation}</td>
      <td data-label="Actions">
        <button onClick={() => onEdit(emp)}>Edit</button>
        <button onClick={() => onDelete(emp.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default EmployeeList;
