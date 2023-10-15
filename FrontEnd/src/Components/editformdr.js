import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";

export const EditFormDR = () => {
  const [coursedata, setCoursedata] = useState({ dready: '', name: '' });

  const { id } = useParams();

  useEffect(() => {
    // Fetch the existing course data by its ID
    axios.get(`http://localhost:3002/getcoursebyid/${id}`)
      .then((res) => {
        console.log(res.data.coursedata);
        // Populate the state with the existing course data
        setCoursedata(res.data.coursedata);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const leversubmit = (e) => {
    e.preventDefault();
    console.log(coursedata);

    // Send the updated course data
    axios.put(`http://localhost:3002/updatecourse/${id}`, coursedata)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
        alert("Submitted Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h5>Drive Ready Course</h5>
      <form onSubmit={leversubmit}>
        <label>Name</label>
        <input
          value={coursedata.name}
          onChange={(e) => setCoursedata({ ...coursedata, name: e.target.value })}
          type='text'
          name='name'
        />
        <label>Course</label>
        <select
          value={coursedata.dready}
          onChange={(e) => setCoursedata({ ...coursedata, dready: e.target.value })}
        >
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
    </div>
  );
};
