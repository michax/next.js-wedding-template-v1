import connectPromise from "../lib/mongodb";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import CardDataSummary from "../src/components/CardDataSummary/CardDataSummary";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import SideBarDetails from "../src/components/SideBarDetails/SideBarDetails";
import NavBarDetails from "../src/components/NavBarDetails/NavBarDetails";
import { ErrorMessage } from "../src/components/ErrorMessage/ErrorMessage";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const amountPeople = 100;

const Invitations = ({ data, error }) => {
  // to check cookies session
  const router = useRouter();

  useEffect(() => {
    const sessionId = getCookie("session");

    if (!sessionId) {
      router.push("/login");
    }
  }, [router]);

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
    try {
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
    } catch (error) {
      const body = {
        log: "generatePdf",
        errorMessage: error.message,
      };
      logFetch(body);
    }
  };

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
              <Box
                sx={{
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
                    color="secondary"
                  >
                    Download PDF
                  </Button>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <CardDataSummary
                      title="Confirmed"
                      subTitle="Number of confirmed adult guests and their companions"
                      total={
                        amountConfirmedPeopleWhoComingAloneOrWithExtraPerson
                      }
                      icon={"akar-icons:people-group"}
                      colorIcon="#20A4F3"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <CardDataSummary
                      title="Not Coming"
                      subTitle="Number of confirmed adult guests who will not be attending"
                      total={amountNotComingPeople.length}
                      color="info"
                      icon={"emojione-monotone:no-pedestrians"}
                      colorIcon="#011627"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <CardDataSummary
                      title="Children"
                      subTitle="Number of confirmed guests under the age of 3"
                      total={sumChildrenUnder3}
                      color="warning"
                      icon={"uil:kid"}
                      colorIcon="#2ec4b6"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <CardDataSummary
                      title="Children"
                      subTitle="Number of confirmed guests aged 3 and over"
                      total={sumChildrenAbove3}
                      color="warning"
                      icon={"fluent-emoji-high-contrast:children-crossing"}
                      colorIcon="#C490D1"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <CardDataSummary
                      title={"Pending"}
                      subTitle="Number of unconfirmed guests"
                      total={amountPendingPeople}
                      color="error"
                      icon={"ic:baseline-pending-actions"}
                      colorIcon="#FF3366"
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Invitations;

export async function getServerSideProps() {
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
