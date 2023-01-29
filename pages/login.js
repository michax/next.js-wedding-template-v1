import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      //main page
      setSuccess(true);
    } else {
      console.log(data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {success ? <p>super</p> : <p>blad</p>}
      <div>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
