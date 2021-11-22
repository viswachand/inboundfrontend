
import LocalLibraryOutlinedIcon from "@mui/icons-material/AccountCircle";
import TrendingUpOutlinedIcon from "@mui/icons-material/AccountCircle";
import DescriptionOutlinedIcon from "@mui/icons-material/AccountCircle";
import React from "react";

export const menu = [
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: "Receiving",
    items: [
      {
        title: "Inbound Staging",
        items: [],
        to:"/home/InboundStaging"

      },
      {
        title: "Inbound Putaway",
        items: [],
        to:"/home"
      },
      {
        title: "Inbound 1-Step",
        items: []
      },
      {
        title: "Floor Moves",
        items: []
      },
      {
        title: "Verify Locations",
        items: []
      },
      {
        title: "Requisition Picking",
        items: []
      }
    ]
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "Tallys"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Orders"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Shipping"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Labour"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Inventory"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Reporting"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Buildings"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Storers"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Admin"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Maintenance"
  }
];
