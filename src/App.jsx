import "./App.css";

function App() {
  // data received

  const handelAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    // data backend ay pathano

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user add success");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple crud client</h1>
      {/* data collect kora  */}
      <form onSubmit={handelAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
