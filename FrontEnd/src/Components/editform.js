import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditFormz = () => {
  const [formdata, setFormdata] = useState({ name: '', rollno: '', college: '', branch: '' }); // Match the field names with your backend
    
  const {id} = useParams()
  useEffect(() => {
    axios.get('http://localhost:3002/getstudentbyid/'+id)
    .then((res) => {
      console.log(res.data.studentdata)
      setFormdata(res.data.studentdata)
    })
    .catch((err) => console.log(err))
  }, [id])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.put('http://localhost:3002/updatestudent/'+id, formdata )
      .then((response) => {
        console.log(response)
        window.location.reload()
        alert("Submitted Successfully")
      })
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={formdata.name}
          name="name"
          onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
        /><br />
        <label>Roll Number</label>
        <input
          type="text"
          value={formdata.rollno}
          name="rollno"
          onChange={(e) => setFormdata({ ...formdata, rollno: e.target.value })}
        /><br />
        <label>College</label>
        <input
          type="text"
          value={formdata.college}
          name="college"
          onChange={(e) => setFormdata({ ...formdata, college: e.target.value })}
        /><br />
        <label>Branch</label>
        <input
          type="text"
          value={formdata.branch}
          name="branch"
          onChange={(e) => setFormdata({ ...formdata, branch: e.target.value })}
        /><br />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default EditFormz;