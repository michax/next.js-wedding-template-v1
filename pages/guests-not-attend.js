import React, { useEffect, useState } from "react";
import SideBar from "../src/components/SideBar/SideBar";
import NavBarDashboard from "../src/components/NavBarDashboard/NavBarDashboard";
import { Typography } from "@mui/material";
import clientPromise from "../lib/mongodb";
import styles from "../styles/Home.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LayoutDashboard from "../src/components/LayoutDashboard/LayoutDashboard";

const GuestsNotAttend = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getData() {
      const response = await fetch("/api/get-data");
      const responseData = await response.json();
      const all = responseData.all;
      setData(all);
      setLoading(false);
    }

    getData();
  }, []);

  const comingGuests = data.filter((guest) => guest.isComing === "No");
  console.log(data);
  console.log(comingGuests);
  return (
    <div>
      {loading ? (
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            textAlign: "center",
          }}
        >
          Loading...
        </Typography>
      ) : (
        <LayoutDashboard>
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              mt: 1,
            }}
          >
            Confirmed Guests Who Will Not Attend
          </Typography>
          <TableContainer component={Paper} sx={{ width: 750 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                    className="tableCell"
                  ></TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                    className="tableCell"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                    className="tableCell"
                  >
                    Surname
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                    className="tableCell"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                    className="tableCell"
                  >
                    Phone Number
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comingGuests.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </LayoutDashboard>
      )}
    </div>
  );
};

export default GuestsNotAttend;

export async function getServerSideProps() {
  // Connect with MongoDB
  const client = await clientPromise;

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
