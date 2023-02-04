import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  // redirect
  useEffect(() => {
    if (isLogging) {
      router.push("/invitations");
    }
  }, [isLogging, router]);

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
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
