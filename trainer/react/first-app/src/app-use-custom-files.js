import { useEffect, useRef, useState } from "react"
import './app-use-effect.css';

export default function AppUseCustomFiles() {
  console.log("AppUseCustomFiles");
  const [userslist, setuserslist] = useState([]);

  useEffect(() => {
    fetch('assets/records.json')
      .then(res => res.json())
      .then(json => setuserslist(json))
  }, []);

  console.log("userslist", userslist)


  const OnRemove = function (id) {
    setuserslist(users => users.filter(i => i.Id !== id))
  }

  return <div className="form-container">
    <div className="form-header">Count: {userslist.length}</div>
    <div className="form-body">
      <table id="list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userslist.length > 0 ?
              userslist.map(function (users) {
                return <tr className="users-rocord" key={users.Id}>
                  <td>{users.Id}</td>
                  <td>{users.Name}</td>
                  <td>{users.Age}</td>
                  <td><button type="button" onClick={() => { OnRemove(users.Id) }}>Delete</button></td>
                </tr>
              }) :
              <tr className="no-users-record">
                <td colSpan={4}>No records found</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
}
