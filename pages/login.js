import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { Typography } from "@material-ui/core";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [registered, setRegistered] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

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

          if (response.status === 409) {
            console.log("Conflict: User already exists");
            return;
          }

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

  // redirect
  useEffect(() => {
    if (isLogging) {
      router.push("/invitations");
    }
  }, [isLogging]);

  // Handle login
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 402) {
      setUsernameError("User is incorrect");
      return;
    }

    if (response.status === 401) {
      setPasswordError("Password is incorrect");
      return;
    }

    const data = await response.json();

    if (data.success) {
      setCookie("session", data.sessionId, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
      setIsLogging(true);
    } else {
      console.log(data.message);
    }
  };

  // Handle login out
  const handleLogout = async (event) => {
    event.preventDefault();

    const username = "Maciek";

    const sessionId = getCookie("session");
    console.log(sessionId);

    if (!sessionId) {
      console.log("No sessionId found");
      return;
    }

    const response = await fetch("api/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sessionId, username: username }),
    });

    const data = await response.json();

    if (data.success) {
      //main page
      deleteCookie("session");
      setIsLogging(false);
    } else {
      console.log(data.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <form
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "400px",
          height: "200px",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            sx={{ mb: "30px" }}
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            error={Boolean(usernameError)}
            helperText={usernameError}
          />
        </div>
        <div>
          <TextField
            sx={{ mb: "30px" }}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
        </div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={{ mb: "10px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Button
            onClick={handleLogout}
            type="submit"
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
