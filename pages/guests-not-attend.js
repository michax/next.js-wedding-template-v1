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
import LayoutDashboardDesktop from "../src/components/LayoutDashboardDesktop/LayoutDashboardDesktop";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const GuestsNotAttend = ({ data, error }) => {
  const comingGuests = data.filter((guest) => guest.isComing === "No");

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

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
        <LayoutDashboardDesktop>
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
              overflowX: "auto",
              maxHeight: isSmallScreen ? "100%" : 840,
            }}
          >
            <TableContainer
              sx={{
                fontSize: isSmallScreen ? "0.8rem" : "inherit",
                minWidth: isSmallScreen && isSmallTabletScreen ? 650 : "auto",
              }}
            >
              <Table aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        backgroundColor: "#212B36",
                        color: "#FFF",
                        p: { xs: "8px", md: "16px" },
                      }}
                    ></TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#212B36",
                        color: "#FFF",
                        p: { xs: "8px", md: "16px" },
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#212B36",
                        color: "#FFF",
                        p: { xs: "8px", md: "16px" },
                      }}
                    >
                      Surname
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#212B36",
                        color: "#FFF",
                        p: { xs: "8px", md: "16px" },
                      }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#212B36",
                        color: "#FFF",
                        p: { xs: "8px", md: "16px" },
                      }}
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
        </LayoutDashboardDesktop>
      )}
    </>
  );
};

export default GuestsNotAttend;

export async function getServerSideProps({ req, res }) {
  const session = getCookie("session", { req, res });

  // check if tes object is falsy, not defined, or empty value
  // Review: Where do you validate if session is one that exists in Database?
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
      // Review: It would be better to log error and redirect to some specific page for failures like 500.html which can inform user that unexpected error occured and only include details in logs using for example console.log or console.error.
      throw new Error("MongoDB client is not connected");
    }

    // Fetch data from MongoDB
    // Review: Db name should be moved to some config/env file. Same goes for collection name.
    const db = client.db("testwedingdatabase");
    const collection = db.collection("userlist");
    const data = await collection.find({}).toArray();

    if (!data || !data.length) {
      // Review: It would be better to create pages for 400 error and redirect it there.
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
