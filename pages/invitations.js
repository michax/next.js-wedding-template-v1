import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";
import CardDataSummary from "../src/components/CardDataSummary/CardDataSummary";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";

import LayoutDashboard from "../src/components/LayoutDashboard/LayoutDashboard";

const amountPeople = 100;

export default function Invitations({ isConnected }) {
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

  console.log("data featch", data);

  // How many people is coming who answer Yes
  const comingGuests = data.filter((guest) => guest.isComing === "Yes");

  // How many people is coming plus with extra person
  const confirmedPeopleWhoComingAndWithExtraPerson = data.filter((person) => {
    return person.isWithCompanion === true && person.isComing === "Yes";
  });

  // console.log("extra", confirmedPeopleWhoComingAndWithExtraPerson);

  const confirmedPeopleWhoComingAlone = data.filter((person) => {
    return person.isWithCompanion === false && person.isComing === "Yes";
  });

  // console.log("coming but alone", confirmedPeopleWhoComingAlone);

  // How many people is not coming
  const amountNotComingPeople = data.filter((person) => {
    return person.isComing === "No";
  });

  const amountConfirmedPeopleWhoComingAloneOrWithExtraPerson =
    Number(confirmedPeopleWhoComingAndWithExtraPerson.length * 2) +
    Number(confirmedPeopleWhoComingAlone.length);

  // waiting for answer
  const amountPendingPeople =
    amountPeople -
    Number(comingGuests.length) -
    Number(amountNotComingPeople.length);

  // Number of Children under  3
  const numberChildren = data.filter((person) => {
    return person.isWithChildren === true;
  });

  const numberChildrenUnder3 = numberChildren.map((child) => {
    return child.amountKids;
  });

  const sumChildrenUnder3 = numberChildrenUnder3.reduce((prev, curr) => {
    return Number(prev) + Number(curr);
  }, 0);

  //// Number of Children above 3
  const numberChildrenOver3 = numberChildren.map((child) => {
    return child.amountTeenagers;
  });

  const sumChildrenAbove3 = numberChildrenOver3.reduce((prev, curr) => {
    return Number(prev) + Number(curr);
  }, 0);

  // PDF

  const generatePDF = () => {
    // create a new pdf document
    const doc = new jsPDF();

    doc.text(20, 20, "Wedding Guest Invitation Summary");

    var data = [
      [
        "Coming Guests with extra Person or not",
        amountConfirmedPeopleWhoComingAloneOrWithExtraPerson,
      ],
      ["Not coming", amountNotComingPeople.length],
      ["Children under 3", sumChildrenUnder3],
      ["Children above 3", sumChildrenAbove3],
    ];

    var columns = ["Data", "Value"];

    var options = {
      startY: 30,
      head: [columns],
      body: data,
    };

    doc.autoTable(options);

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    doc.text(80, 10, "Date: " + date);
    // save the pdf
    doc.save("file.pdf");
  };

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
          <Box
            sx={{
              mt: "1rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",

                justifyContent: { xs: "center", sm: "space-between" },
                alignItems: { xs: "center", sm: "flex-start" },
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 5,
                  mt: 1,
                  textAlign: "left",
                }}
              >
                Wedding Guest Invitation Summary
              </Typography>
              <Button
                sx={{ height: "40px", mb: { xs: "30px", sm: "0" } }}
                onClick={generatePDF}
                variant="contained"
              >
                Download PDF
              </Button>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Confirmed"
                  subTitle="Total number of adults coming, plus companions who indicated they are also coming "
                  total={amountConfirmedPeopleWhoComingAloneOrWithExtraPerson}
                  icon={"akar-icons:people-group"}
                  colorIcon="#20A4F3"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Not Coming"
                  subTitle="Total number of adults  who indicated they are not coming"
                  total={amountNotComingPeople.length}
                  color="info"
                  icon={"emojione-monotone:no-pedestrians"}
                  colorIcon="#011627"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Children"
                  subTitle="Total number of children under 3 years old"
                  total={sumChildrenUnder3}
                  color="warning"
                  icon={"uil:kid"}
                  colorIcon="#2ec4b6"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Children"
                  subTitle="Total number of children over 3 years old"
                  total={sumChildrenAbove3}
                  color="warning"
                  icon={"fluent-emoji-high-contrast:children-crossing"}
                  colorIcon="#C490D1"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title={"Pending"}
                  subTitle="Number of invitations not answered"
                  total={amountPendingPeople}
                  color="error"
                  icon={"ic:baseline-pending-actions"}
                  colorIcon="#FF3366"
                />
              </Grid>
            </Grid>
          </Box>
        </LayoutDashboard>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // Connect with MongoDB
  const client = await clientPromise;

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
