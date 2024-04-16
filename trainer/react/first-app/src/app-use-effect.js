import { useEffect, useRef, useState } from "react"
import './app-use-effect.css';

export default function AppUseEffect() {
  console.log("AppUseEffect");
  const [userslist, setuserslist] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(json => setuserslist(json.users))
  }, []);

  console.log("userslist", userslist)


  const OnRemove = function (id) {
    setuserslist(users => users.filter(i => i.id !== id))
  }

  return <div className="form-container">
    <div className="form-header">Count: {userslist.length}</div>
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
            userslist.length > 0 ?
              userslist.map(function (users) {
                return <tr className="users-rocord" key={users.id}>
                  <td>{users.id}</td>
                  <td>{users.email}</td>
                  <td>{users.firstName + ' ' + users.lastName}</td>
                  <td>{users.age}</td>
                  <td><button type="button" onClick={() => { OnRemove(users.id) }}>Delete</button></td>
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
