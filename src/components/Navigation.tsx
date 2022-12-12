import { useState } from "react";
import { Outlet } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const hardCodedProfile = [
  {
    username: "Arturo",
    name: "Alessandro Moretti",
    email: "gianmarialessandro@gmail.com",
    residence: "Germany",
  },
];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "orange", height: "3rem" }} >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
          <AdbIcon sx={{
            alignItems: "center", border: "solid", marginBottom: "0.5rem"
          }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              marginBottom: "0.5rem"
            }}
          >
            Code Learning
          </Typography>

         

          <Tooltip title={hardCodedProfile[0].username} arrow>
            <IconButton
              sx={{ background: "white" }}
              onClick={handleOpenUserMenu}
            >
              <PermIdentityIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {hardCodedProfile.map((profile) => (
              <MenuItem key={profile.name} onClick={handleCloseNavMenu} sx={{ fontSize: 14, padding: "0.4rem" }}>
                <Typography textAlign="center" sx={{ fontSize: 14}}>{profile.username}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navigation;
