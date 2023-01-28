import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import styles from "./NavBarDetails.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";

const NavBarDetails = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  let summaryLinkText = "";
  let summaryLinkHref = "";
  let secondLinkText = "";

  // determine the text and href links based on the current route
  switch (currentRoute) {
    case `/invitations`:
      summaryLinkHref = `/invitations`;
      summaryLinkText = "Summary";
      secondLinkText = "Preview";
      break;
    case `/summary-drinks`:
      summaryLinkHref = `/summary-drinks`;
      summaryLinkText = "Meal";
      secondLinkText = "Drinks";
      break;
    case `/summary-food`:
      summaryLinkHref = `/summary-food`;
      summaryLinkText = "Meal";
      secondLinkText = "Allergy";
      break;
    case `/guests-not-attend`:
      summaryLinkHref = `/guests-not-attend`;
      summaryLinkText = "List of guests";
      secondLinkText = "Not-Attending";
      break;
    case `/confirmed-guest`:
      summaryLinkHref = `/confirmed-guest`;
      summaryLinkText = "List of guests";
      secondLinkText = "Attending";
      break;
  }

  const redirectToFistSubmenu = (event, secondLinkText) => {
    event.preventDefault();

    switch (secondLinkText) {
      case "Preview":
        router.push(`/invitations`);
        break;
      case "Drinks":
        router.push(`summary-drinks`);
        break;
      case "Allergy":
        router.push(`confirmed-food`);
        break;
      case "Not-Attending":
        router.push(`guests-not-attend`);
        break;
      case "Attending":
        router.push(`confirmed-guest`);
        break;
    }
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.breadcrumb}>
            <Breadcrumbs
              sx={{ fontSize: "14px" }}
              separator={<ArrowForwardIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                sx={{ textDecoration: "none", color: "#0021F5" }}
                href={summaryLinkHref}
                component={NextLink}
              >
                {summaryLinkText}
              </Link>
              {secondLinkText && (
                <Link
                
                  onClick={(event) =>
                    redirectToFistSubmenu(event, secondLinkText)
                  }
                  sx={{ textDecoration: "none", color: "#fa541c" }}
                  component={NextLink}
                  href={summaryLinkHref}
                >
                  {secondLinkText}
                </Link>
              )}
            </Breadcrumbs>
          </div>
          <div className={styles.items}>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", color: "#fa541c" }}
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Back to Wedding Page
            </Link>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default NavBarDetails;
