import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import RulesModal from "../components/RulesModal";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SettingsIcon from "@mui/icons-material/Settings";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = ["letters", "numbers", "finale", "about"];

const NavBar: React.FC = (props: Props) => {
  const { window } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  const handleToggle = (
    setState: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setState((prevState) => !prevState);
  };

  // const handleDrawerToggle = () => {
  //   setDrawerOpen((prevState) => !prevState);
  // };

  // const handleRulesModalToggle = () => {
  //   setRulesModalOpen((prevState) => !prevState);
  // };

  const drawer = (
    <Box
      onClick={() => handleToggle(setDrawerOpen)}
      sx={{ textAlign: "center" }}
    >
      <ListItemButton
        onClick={() => navigate("/")}
        sx={{ justifyContent: "center" }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, my: 2 }}>
          CONUNDRUM
        </Typography>
      </ListItemButton>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => navigate(`/${item}`)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item[0].toUpperCase() + item.slice(1)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleToggle(setDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Conundrum
          </Typography>
          {pathname !== "/about" && (
            <Box>
              <Button
                sx={{ color: "#fff" }}
                onClick={() => handleToggle(setRulesModalOpen)}
              >
                <QuestionMarkIcon
                  color="inherit"
                  aria-label="open rules modal"
                />
              </Button>
              <Button
                sx={{ color: "#fff" }}
                onClick={() => handleToggle(setSettingsModalOpen)}
              >
                <SettingsIcon
                  color="inherit"
                  aria-label="open settings modal"
                />
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          open={drawerOpen}
          onClose={() => handleToggle(setDrawerOpen)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>

      {pathname !== "/about" && (
        <RulesModal
          handleRulesModalToggle={() => handleToggle(setRulesModalOpen)}
          rulesModalOpen={rulesModalOpen}
          pathname={pathname}
        />
      )}
    </Box>
  );
};

export default NavBar;
