import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  // data delete korar jonno  and delete ar jonno data pathate hobe na

  const handleDelete = (_id) => {
    console.log("delete user", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    // read \get data akhany dekhache upporyr loader ar moddhomya
    <div>
      <h3>{users.length}</h3>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} :{user.email} :{user._id}
            <Link to={`/update/${user._id}`}>Update</Link>
            <button onClick={() => handleDelete(user._id)}>delete</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
