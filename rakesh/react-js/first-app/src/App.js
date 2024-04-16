import { useEffect, useRef, useState } from "react"
import './table-style.css';

export default function AppUseEffect() {
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
