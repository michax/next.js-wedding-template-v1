import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [registered, setRegistered] = useState(false);

  // Registering a temporary user to the database
  useEffect(() => {
    if (!registered) {
      const password = "secretpassword";
      const username = "Maciek";

      const body = { username: username, password: password };

      try {
        async function addTestUser() {
          const response = await fetch("api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });

          const data = await response.json();

          if (data.success) {
            //main page
            setSuccess(true);
            setRegistered(true);
          } else {
            console.log(data.message);
          }
        }

        addTestUser();
      } catch (error) {
        console.log(error);
      }
    }
  }, [registered]);

  

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
      setIsLogging(true);
    } else {
      console.log(data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {success ? <p>User exist </p> : <p>no user</p>}
      {isLogging ? <p>The user is Logged in</p> : <p>No user logged in</p>}
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
