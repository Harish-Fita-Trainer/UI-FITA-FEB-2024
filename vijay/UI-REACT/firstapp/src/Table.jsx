import React from "react";
import { useEffect, useState } from "react"
import './table.css';

export default function AppuseEffect(){
    const [userslist, setuserslist] = useState([]);
    const [id ,setid] =useState('');
    const [email,setemail] =useState('');
    const [name ,setname] =useState('');
    const [password ,setpassword] =useState('');

    useEffect= ()=>{
        fetch('https://dummyjson.com/users')
          .then(res => res.json())
          .then(json => setuserslist(json.users))
      }
      console.log("userslist", userslist)

      const OnRemove = function (id) {
        setuserslist(users => users.filter(i => i.id !== id))
      }
      const clear = ()=>{
        setuserslist([]);
      }
      const adddetails =function (e){
        setuserslist(users =>
        users.concat([{id:id,name:name,email:email,password:password}]));
      }
    return <div className="main-container">
        <div className="form-header">count:{userslist.length}</div>
        <div className="form-body">
            <div>
            <label>Enter Id</label>
            <input type="text" onChange={e =>setid(e.target.value)}></input>
            </div>
            <div>
            <label>Enter Email</label>
            <input type="text" onChange={e =>setemail(e.target.value)}></input>
            </div>
            <div>
            <label>Enter Name</label>
            <input type="text" onChange={e =>setname(e.target.value)}></input>
            </div>
            <div>
            <label>Enter Password</label>
            <input type="text" onChange={e =>setid(e.target.value)}></input>
            </div>
            <div>
            <button onClick={adddetails}>Add</button>
            </div>
            <div>
            <button  onClick={clear}>Remove</button>
            </div>
        </div>
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
}