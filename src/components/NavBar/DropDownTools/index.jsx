import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import Button from "@mui/material/Button";
import Menu, { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export function DropDownTools(){
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        sx={{
          background: "transparent",
          textTransform: "capitalize",
          borderStyle: "solid",
          border:`none`,
          color:`#000000`

        }}
        endIcon={
          <ExpandMoreIcon
            sx={{
              userSelect: "none",
              pointerEvents: "none",
              transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        }
      >
        Tools
      </Button>
      <Menu
        id="simple-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{
          [`& .${menuClasses.paper}`]: {
           
            borderRadius: "4px",
            marginTop: "8px",
          },
        }}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>Lorem</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Ipsum</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Dolor</MenuItem>
      </Menu>
    </div>
  );
}
