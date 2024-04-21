import React from "react";
import { useEffect, useRef, useState } from "react"
import './table-style.css';


 function Userdata(){
  const [usertable, setusertable] = useState({
    id: '',
    Gmail: '',
    Firtname: '',
    age: ''
    });

    const Addtable = (e)=>{
      const {name, value} = e.target;
       setusertable({ ...usertable,[name]: value});
    };
    const Add =(e) =>{
      e.preventdefult();
    }
    return(
      <div>
        <form onSubmit={Add}>
        <div>
        <label>Id</label>
        <input type="text" name="id" value={usertable.id} onChange={Addtable} />
        </div>
        <div>
        <label>Gmail</label>
        <input type="text" name="Gmail" value={usertable.Gmail} onChange={Addtable} />
        </div>
        <div>
        <label>Firstname</label>
        <input type="text" name="Firstname" value={usertable.Firstname} onChange={Addtable} />
        </div>
        <div>
        <label>Age</label>
        <input type="text" name="age" value={usertable.age} onChange={Addtable} />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
        </form>
        <table>
          <thead>
            <tr>
            <th>Id</th>
            <th>Email Id</th>
            <th>Name</th>
            <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{usertable.id}</td>
              <td>{usertable.Gmail}</td>
              <td>{usertable.Firstname}</td>
              <td>{usertable.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

}

function AppUseEffect() {
  const [userslist, setuserslist] = useState([]);

  const fetchdata = ()=>{
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(json => setuserslist(json.users))
  }

  useEffect(() => {
    fetchdata();

  }, []);

  console.log("userslist", userslist)


  const OnRemove = function (id) {
    setuserslist(users => users.filter(i => i.id !== id))
  }
  const clear = ()=>{
    setuserslist([]);
  }
  const refres = ()=>{
    fetchdata();
  };

  return <div className="form-container">
    <div className="form-header">Count: {userslist.length}</div>
    <button type="button" id="clear" onClick={clear}>Clear</button>
    <button type="button" id="refresh" onClick={refres}>Refresh</button>
    <div className="form-body">
      <table id="list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userslist.length > 0  ?
              userslist.map(users => {
                return <tr className="users-rocord" key={users.id}>
                  <td>{users.id}</td>
                  <td>{users.email}</td>
                  <td>{users.firstName + ' ' + users.lastName}</td>
                  <td>{users.age}</td>
                  <td><button type="button" id="deletebtn" onClick={() => { OnRemove(users.id) }}>Delete</button></td>
                </tr>
              }) :
              <tr className="no-users-record">
                <td colSpan={5}>No records found</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
}

export { Userdata, AppUseEffect };