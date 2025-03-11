STUDENT LIST COMPONENT:
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students] = useState([
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 23, grade: 'A' }
  ]);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}, Age: {student.age}, Grade: {student.grade}
            <Link to={`/students/${student.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
STUDENT-DETAILS COMPONENT:
import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams();
  const student = {
    1: { name: 'Alice', age: 20, grade: 'A' },
    2: { name: 'Bob', age: 22, grade: 'B' },
    3: { name: 'Charlie', age: 23, grade: 'A' }
  }[id];

  return (
    <div>
      <h2>Student Details</h2>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
        </div>
      ) : (
        <p>Student not found</p>
      )}
    </div>
  );
};

export default StudentDetails;
APP COMPONENT:
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
