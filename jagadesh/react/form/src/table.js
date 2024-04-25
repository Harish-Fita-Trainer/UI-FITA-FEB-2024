import { useEffect } from "react";

expor default function table() {

    const [userslist,setuserslist]=useEffect("");

    useEffect(() => {
        fetch('https://dummyjson.com/users')
          .then(res => res.json())
          .then(json => setuserslist(json.users))
      }, []);

      console.log("userlist is",userslist)
    return <div>
      <table id="list">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email Id</th>
          <th>Name</th>
          <th>password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          
            userslist.map(users => {
              return <tr className="users-rocord" key={users.id}>
                <td>{users.id}</td>
                <td>{users.email}</td>
                <td>{users.firstName + ' ' + users.lastName}</td>
                <td>{users.password}</td>
               
            );

            </tbody>

        

            </div>
}


