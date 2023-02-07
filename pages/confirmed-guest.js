import connectPromise from "../lib/mongodb";
import { Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBarDetails from "../src/components/NavBarDetails/NavBarDetails";
import SideBarDetails from "../src/components/SideBarDetails/SideBarDetails";
import { ErrorMessage } from "../src/components/ErrorMessage/ErrorMessage";
import { getCookie } from "cookies-next";

const ConfirmedGuest = ({ data, error }) => {
  const comingGuests = data.filter((guest) => guest.isComing === "Yes");

  return (
    <>
      {error?.status === 500 ? (
        <ErrorMessage message="Sorry, there was a problem with the server. Please try again later." />
      ) : error?.status === 400 ? (
        <ErrorMessage message="Sorry, there was a problem with your request. Please try again later." />
      ) : error ? (
        <ErrorMessage message="Sorry, there was a problem fetching the data. Please try again later." />
      ) : data === null ? (
        <ErrorMessage message="No data found." />
      ) : (
        <div className={styles.home}>
          <SideBarDetails />
          <div className={styles.homeContainer}>
            <NavBarDetails />
            <div style={{ color: "#494949" }} className={styles.container}>
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
              <Paper
                sx={{
                  width: { xs: "50vw", sm: "60vw", md: "100%" },
                  overflow: "hidden",
                }}
              >
                <TableContainer sx={{ maxHeight: 540 }}>
                  <Table aria-label="simple table">
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
                          Kids Under 3
                        </TableCell>
                        <TableCell
                          sx={{ backgroundColor: "#212B36", color: "#FFF" }}
                          className="tableCell"
                        >
                          {" "}
                          Old Kids Over 3
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmedGuest;

export async function getServerSideProps({ req, res }) {
  const session = getCookie("session", { req, res });

  // check if tes object is falsy, not defined, or empty value
  if (!session) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
    return { props: {} };
  }
  try {
    // Connect with MongoDB
    const client = await connectPromise;
    const isConnected = await client.isConnected();

    if (!isConnected) {
      throw new Error("MongoDB client is not connected");
    }

    // Fetch data from MongoDB
    const db = client.db("testwedingdatabase");
    const collection = db.collection("userlist");
    const data = await collection.find({}).toArray();

    if (!data || !data.length) {
      return { props: { error: { status: 400 } } };
    }

    // to fix error serialized to JSON, MongoDB return _id property as object not STRING
    const jsonData = data.map((item) => {
      item._id = item._id.toString();
      return item;
    });

    return { props: { data: jsonData } };
  } catch (error) {
    console.error(error);
    return { props: { error: { status: 500 } } };
  }
}
