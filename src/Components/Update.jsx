import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUsers = useLoaderData();

  // data update korar jonno

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    console.log(name, email);
    fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("update success");
        }
      });
  };

  return (
    <div>
      <h2>Update information of {loadedUsers.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUsers.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUsers.email}
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
