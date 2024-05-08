import {
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  styled,
  Button,
  Grow,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import hospital_logo from "../../assets/images/logo/logo-full.png";

import {
  links_mapping,
} from "./userNavigationLinks";

import MenuIcon from "@mui/icons-material/Menu";
import RegisterPatient from "../RegisterPatient";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";
import useLogout from "./useLogout";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#003049",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .MuiDrawer-paper": {
    backgroundColor: "#003459",
    color: "#ffffff",
  },
}));

const PageNavigation = () => {
  // const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const currentUser = useSelector((state) => state.user);
  const { handleLogout } = useLogout();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleRegister = () => setRegisterOpen((prev) => !prev);

  const handleUserMenu = (type) => {
    switch (type) {
      case "Profile":
        navigate("/profile");
        break;

      case "Logout":
        handleLogout();
        break;

      default:
        break;
    }
    handleCloseUserMenu();
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links_mapping.find((item) => item.type === currentUser.type) ? (
          links_mapping
            .find((item) => item.type === currentUser.type)
            .links.map((item, index) =>
              item.hidden ? (
                <></>
              ) : (
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() => navigate(item.path)}
                >
                  <ListItemButton>
                    <ListItemIcon
                      style={{
                        color:
                          item.path === location.pathname ? "#1f87c9" : "#fff",
                      }}
                    >
                      <item.icon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText
                      style={{
                        color:
                          item.path === location.pathname ? "#1f87c9" : "#fff",
                      }}
                      primary={item.title}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )
        ) : (
          <></>
        )}
        {currentUser.type === "receptionist" && (
          <ListItem alignItems="center">
            <Button variant="contained" size="small" onClick={handleRegister}>
              Register Patient
            </Button>
          </ListItem>
        )}
      </List>
      {/* <Divider /> */}
      {/* <div style={{ display: "flex", alignItems: "center",width:"100%" }}>
        <Button variant="contained">Register Patient</Button>
      </div> */}
      <RegisterPatient open={registerOpen} setOpen={setRegisterOpen} />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  // let container = Window !== undefined ? () => Window().document.body : undefined;

  const checkUrlAccess = () => {
    const links = links_mapping.find(
      (item) => item.type === currentUser.type
    )?.links;

    let valid = false;
    if (links && links.length > 0) {
      const path = location.pathname;
      for (let i in links) {
        if (links[i].path === path) {
          valid = true;
          break;
        }
      }
    }
    if (valid === false) {
      navigate("/403");
    }
  };
  useEffect(() => {
    if (!currentUser.logged) {
      navigate("/login");
    }
  }, [currentUser.logged]);

  useEffect(() => {
    if (currentUser.logged) {
      checkUrlAccess();
    }
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={mobileOpen}
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
          <div className="login-card-logo" style={{ flexGrow: 1 }}>
            <img
              className="login-logo"
              src={hospital_logo}
              alt="hospital_logo"
            />
            <div className="login-logo-name">HSC</div>
          </div>
          <div className="user-section">
            <div className="nav-user-section">
              <span className="nav-user-name">{currentUser.name}</span>
              <span className="nav-user-type">{currentUser.type}</span>
            </div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {["Profile", "Logout"].map((setting) => (
                <MenuItem key={setting} onClick={() => handleUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={
            typeof window !== undefined ? window.document.body : undefined
          }
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open={mobileOpen}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default PageNavigation;
