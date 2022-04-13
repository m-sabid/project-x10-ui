import React, { useEffect, useState, useMemo  } from "react";







const getData = () => {
    const data = localStorage.getItem("users");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

const Test = () => {


  const [users, setUsers] = useState(getData());

  const [uName, setUname] = useState("");
  const [uEmail, setEmail] = useState("");
  const [uPassword, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    //   object
    let user = { uName, uEmail, uPassword };
    setUsers([...users, user]);

    setUname("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <form
        onSubmit={handelSubmit}
        autoComplete="off"
        style={{
          margin: "auto",
          backgroundColor: "red",
          padding: "20px",
          textAlign: "center",
          width: "500px",
          color: "white",
        }}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUname(e.target.value)}
          value={uName}
        />
        <br />
        <br />
        <label>Email </label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={uEmail}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={uPassword}
        />
        <br />
        <br />
        
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <div className="result">
        {users.map((us) => (
          <>
            <h1>Name: {us.uName}</h1>
          </>
        ))}

        {users.length < 1 && <h1>No User yet</h1>}
      </div>
    </div>
  );
};

export default Test;
