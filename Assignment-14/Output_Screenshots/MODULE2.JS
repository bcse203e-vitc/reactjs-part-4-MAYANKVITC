STUDENT COMPONENT:
import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && age.trim() && grade.trim()) {
      addStudent({ name, age: parseInt(age), grade });
      setName('');
      setAge('');
      setGrade('');
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudent;
MODIFIED FOR STUDENT LIST COMPONENT:
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 23, grade: 'A' }
  ]);

  const addStudent = (student) => {
    student.id = students.length + 1;
    setStudents([...students, student]);
  };

  return (
    <div>
      <h1>Student List</h1>
      <AddStudent addStudent={addStudent} />
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
