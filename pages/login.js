import bcrypt from "bcrypt";
import connectPromise from "../lib/mongodb";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginPage = ({ error }) => {
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
      {success ? <p>you logged in </p> : <p>try log in </p>}
      {error && error.status === 409 && <p> just for test User already exists</p>}
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

export async function getServerSideProps() {


  try {
    // Connect with MongoDB
    const client = await connectPromise;
    const isConnected = await client.isConnected();

    if (!isConnected) {
      throw new Error("MongoDB client is not connected");
    }

    const db = client.db("userAccount");
    const sessionCollection = db.collection("session");
    const userCollection = db.collection("users");

    const username = "";

    const existingUser = await userCollection.findOne({ username: "Maciek" });

    if (existingUser) {
      console.log(`User "${username}" already exists`);

      return {
        props: {
          error: { status: 409, message: "`User Maciek already exists`" },
        },
      };
    }

    // Hash the password
    const password = "secretpassword";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the user into the collection
    const user = { username: "Maciek", password: hashedPassword };
    const result = await userCollection.insertOne(user);
    console.log(result.ops[0]._id);

    if (!result.insertedCount) {
      return { props: { error: { status: 400 } } };
    }



    // Generate a unique session ID
    const sessionId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const session = {
      sessionId: sessionId,
      userId: result.ops[0]._id,
    };

    await sessionCollection.insertOne(session);


    return { props: { data: JSON.stringify(result) } };
  } catch (error) {
    console.error(error);

    return { props: { error: { status: 500 } } };
  }


}
