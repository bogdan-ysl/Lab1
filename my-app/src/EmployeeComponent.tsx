import React from 'react';

interface Person {
    id: number;
    name: string;
    age: number;
    email: string;
    address: string;
}

interface Employee extends Person {
    position: string;
    salary: number;
}

const employee: Employee = {
    id: 1,
    name: "Bogdan Costas",
    age: 21,
    email: "bogdan.costas@iis.utm.md",
    address: "123 Chisinau",
    position: "Calculatoare Retele",
    salary: 0
};

const EmployeeComponent: React.FC = () => {
    return (
        <div>
            <h1>Employee Details</h1>
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Age:</strong> {employee.age}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Address:</strong> {employee.address}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
        </div>
    );
};

export default EmployeeComponent;
