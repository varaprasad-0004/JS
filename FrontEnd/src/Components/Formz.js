import { useState } from "react";
import axios from "axios";

const Formz = () => {
  const [formdata, setFormdata] = useState({ name: '', rollno: '', college: '', branch: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    axios.post('http://localhost:3002/addstudent', { formdata })
      .then((response) => {
        window.location.reload()
        alert("Submitted Successfully")
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          value={formdata.name}
          type="text"
          name="name"
          onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
        /><br />
        <label>Roll Number</label>
        <input
          value={formdata.rollno}
          type="text"
          name="rollno"
          onChange={(e) => setFormdata({ ...formdata, rollno: e.target.value })}
        /><br />
        <label>College</label>
        <input
          value={formdata.college}
          type="text"
          name="college"
          onChange={(e) => setFormdata({ ...formdata, college: e.target.value })}
        /><br />
        <label>Branch</label>
        <input
          value={formdata.branch}
          type="text"
          name="branch"
          onChange={(e) => setFormdata({ ...formdata, branch: e.target.value })}
        /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Formz;
