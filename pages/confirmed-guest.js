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

const ConfirmedGuest = () => {
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

  const comingGuests = data.filter((guest) => guest.isComing === "Yes");
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
              textAlign: "left",
            }}
          >
            List of Confirmed Guests and Their Companions, with Number of
            Children
          </Typography>
          <Paper sx={{ width: { xs: "45vh", sm: "60vh",md:"100%" }, overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 540 }}>
              <Table aria-label="simple table" stickyHeader>
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
                    <TableCell
                      sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                      className="tableCell"
                    >
                      Companion
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                      className="tableCell"
                    >
                      Companion Name
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                      className="tableCell"
                    >
                      {" "}
                      Companion Surname
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                      className="tableCell"
                    >
                      {" "}
                      Children Under 3 Years Old
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                      className="tableCell"
                    >
                      {" "}
                      Children Over 3 Years Old
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
                      <TableCell>
                        {row.isWithCompanion ? "Yes" : "NO"}
                      </TableCell>
                      <TableCell>{row.firstNameCompanion}</TableCell>
                      <TableCell>{row.lastNameCompanion}</TableCell>
                      <TableCell align="center">{row.amountKids}</TableCell>
                      <TableCell align="center">
                        {row.amountTeenagers}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </LayoutDashboard>
      )}
    </div>
  );
};

export default ConfirmedGuest;

export async function getServerSideProps() {
  // Connect with MongoDB
  const client = await clientPromise;

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
