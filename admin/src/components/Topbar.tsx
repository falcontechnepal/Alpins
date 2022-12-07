import React from "react";
import { Grid, Typography, Toolbar, Box, AppBar, Stack, Avatar, Chip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailDialogBox from "./MailDialogBox";
import NotificationDialogBox from "./NotificationDialogBox";
import { MailContextProvider } from "../../context/MailContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";

export default function Topbar() {
  const logout = (e: any) => {
    e.preventDefault();
    signOut();
  };

  return (
    <MailContextProvider>
      <AppBar
        position="static"
        className="customNavbar">
        <Toolbar>
          <Grid
            container
            justifyContent="space-between">
            <Box>
              <Grid
                container
                alignItems="center"
                gap={2}>
                <MenuIcon className="cp" />
                <Typography variant="h6">DASHBOARD</Typography>
              </Grid>
            </Box>

            <Box>
              <Grid
                container
                gap={2}>
                <MailDialogBox />
                <NotificationDialogBox />
                <Stack
                  direction="row"
                  spacing={1}>
                  <Chip
                    avatar={
                      <Avatar
                        alt="Natacha"
                        src="/static/images/avatar/1.jpg"
                      />
                    }
                    label="Avatar"
                    variant="outlined"
                  />

                  <div className="div ms-3">
                    <BiLogOut
                      onClick={logout}
                      type="button"
                      size={30}
                    />
                  </div>
                </Stack>
              </Grid>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </MailContextProvider>
  );
}
