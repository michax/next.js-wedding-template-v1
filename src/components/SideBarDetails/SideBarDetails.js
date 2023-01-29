import React from "react";
import CommonSidebar from "../CommonSidebar/CommonSidebar";
import NavMenuSidebar from "../NavMenuSidebar/NavMenuSidebar";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import GroupIcon from "@mui/icons-material/Group";
import { useRouter } from "next/router";

const SideBarDetails = () => {
  const router = useRouter();
  // console.log("router.query", router.query);
  // console.log("router.pathname", router.pathname);

  return (
    <CommonSidebar>
      <NavMenuSidebar
        title="Summary"
        icon={<MarkAsUnreadIcon sx={{ mr: "10px" }} />}
        subMenuItems={[
          {
            label: "Preview",
            href: `/invitations`,
          },
        ]}
      />
      <NavMenuSidebar
        title="Meal"
        icon={<LocalBarIcon sx={{ mr: "10px" }} />}
        subMenuItems={[
          {
            label: "Allergy",
            href: `/summary-food`,
          },
          {
            label: "Drinks",
            href: `/summary-drinks`,
          },
        ]}
      />
      <NavMenuSidebar
        title="List of guests"
        icon={<GroupIcon sx={{ mr: "10px" }} />}
        subMenuItems={[
          {
            label: "Attending",
            href: `/confirmed-guest`,
          },
          {
            label: "Not-Attending",
            href: `/guests-not-attend`,
          },
        ]}
      />
    </CommonSidebar>
  );
};

export default SideBarDetails;
