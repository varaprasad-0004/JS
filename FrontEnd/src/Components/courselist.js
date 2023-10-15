import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/getcourses")
      .then((response) => {
        console.log(response.data.coursedata);
        setCourses(response.data.coursedata);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const handleeDelete = (courseId) => {
    axios.delete(`http://localhost:3002/deletecourse/${courseId}`)
      .then(() => {
        alert('Deleted Successfully')
        window.location.reload()
        setCourses(courses.filter(course => course._id !== courseId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h4>Course List</h4>
      <h4>Add a new student: <Link to={`/FormDR/`}><button style={{marginLeft:'10px', marginTop:'10px', marginBottom:'10px', backgroundColor:'darkcyan', color:'white', border:'none', padding:'8px', borderRadius:'8px'}}>Add</button></Link></h4>
      <table border="1" style={{ borderCollapse: "collapse", width: "500px" }}>
        <thead style={{backgroundColor:'black', color:'white', fontSize:'13px'}}>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>D-Ready Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{fontSize:'13px'}}>
          {courses && courses.map((course, index, arr) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{course.name}</td>
              <td>{course.dready}</td>
              <td>
                <Link to={`/editformdr/${course._id}`}><button style={{marginLeft:'10px', marginTop:'10px', marginBottom:'10px', backgroundColor:'darkcyan', color:'white', border:'none', padding:'8px', borderRadius:'8px'}}>Edit</button></Link>
                <button style={{marginLeft:'10px', backgroundColor:'red', color:'white', border:'none', padding:'8px', borderRadius:'8px'}} onClick={() => handleeDelete(course._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
