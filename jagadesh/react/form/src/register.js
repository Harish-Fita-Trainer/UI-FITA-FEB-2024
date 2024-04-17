import React, { useState } from "react";

export default function Register() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [emailid, setemailid] = useState('');
  const [password, setpassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log({ firstname, lastname, phonenumber, emailid, password });
  };

  return (
    <div>
      <div>
        <label>FirstName</label>
        <input type="text" onChange={(e) => { setfirstname(e.target.value) }} />
      </div>
      <div>
        <label>LasttName</label>
        <input type="text" onChange={(e) => { setlastname(e.target.value) }} />
      </div>
      <div>
        <label>phonenumber</label>
        <input type="text" onChange={(e) => { setphonenumber(e.target.value) }} />
      </div>
      <div>
        <label>Mailid</label>
        <input type="text" onChange={(e) => { setemailid(e.target.value) }} />
      </div>
      <div>
        <label>password</label>
        <input type="password" onChange={(e) => { setpassword(e.target.value) }} />
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
