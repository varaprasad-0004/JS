import React, { useState } from 'react';
import axios from 'axios';

export const FormDR = () => {
  const [coursedata, setCoursedata] = useState({ dready: '', name: '' });

  const leversubmit = (e) => {
    e.preventDefault();
    console.log(coursedata);

    axios.post('http://localhost:3002/addcourse', { coursedata })
      .then((response) => {
        window.location.reload()
        alert("Submitted Successfully")
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <center>
    <div>
      <h3>Drive Ready Course</h3>
      <form onSubmit={leversubmit}>
        <label style={{fontWeight:'bold'}} >Name</label><br/>
        <input style={{borderRadius:'25px'}} placeholder='Enter your name' value={coursedata.name} onChange={(e) => setCoursedata({ ...coursedata, name: e.target.value })} type='text' name='name' /><br/>
        <label style={{fontWeight:'bold'}} >Course</label><br/>
        <select style={{height:'30px', backgroundColor:'black', color:'white', borderRadius:'15px'}} value={coursedata.dready} onChange={(e) => setCoursedata({ ...coursedata, dready: e.target.value })}>
          <option value="">Select a course</option>
          <option value="FSD">FSD</option>
          <option value="AWS">AWS</option>
          <option value="G Cloud">G Cloud</option>
          <option value="G Flutter">G Flutter</option>
          <option value="Pega">Pega</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div></center>
  );
};
