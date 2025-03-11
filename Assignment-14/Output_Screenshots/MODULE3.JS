STUDENT COMPONENT:
import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams();
  const student = {
    1: { name: 'Alice', age: 20, grade: 'A', email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St' },
    2: { name: 'Bob', age: 22, grade: 'B', email: 'bob@example.com', phone: '098-765-4321', address: '456 Elm St' },
    3: { name: 'Charlie', age: 23, grade: 'A', email: 'charlie@example.com', phone: '567-890-1234', address: '789 Oak St' }
  }[id];

  return (
    <div>
      <h2>Student Details</h2>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Address: {student.address}</p>
        </div>
      ) : (
        <p>Student not found</p>
      )}
    </div>
  );
};

export default StudentDetails;
NEW DETAILS:
const [students, setStudents] = useState([
  { id: 1, name: 'Alice', age: 20, grade: 'A', email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St' },
  { id: 2, name: 'Bob', age: 22, grade: 'B', email: 'bob@example.com', phone: '098-765-4321', address: '456 Elm St' },
  { id: 3, name: 'Charlie', age: 23, grade: 'A', email: 'charlie@example.com', phone: '567-890-1234', address: '789 Oak St' }
]);
MODIFIED CODE:
import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && age.trim() && grade.trim() && email.trim() && phone.trim() && address.trim()) {
      addStudent({ name, age: parseInt(age), grade, email, phone, address });
      setName('');
      setAge('');
      setGrade('');
      setEmail('');
      setPhone('');
      setAddress('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Grade:</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudent;
