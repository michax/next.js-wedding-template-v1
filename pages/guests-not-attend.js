import connectPromise from "../lib/mongodb";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ErrorMessage } from "../src/components/ErrorMessage/ErrorMessage";
import { getCookie } from "cookies-next";
import LayoutDashboard from "../src/components/LayoutDashboard/LayoutDashboard";

const GuestsNotAttend = ({ data, error }) => {
  const comingGuests = data.filter((guest) => guest.isComing === "No");

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
          <Paper
            sx={{
              width: { xs: "70vw", sm: "75vw", md: "80vw" },
              overflow: "hidden",
            }}
          >
            <TableContainer sx={{ maxHeight: 840 }}>
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
          </Paper>
        </LayoutDashboard>
      )}
    </>
  );
};

export default GuestsNotAttend;

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
