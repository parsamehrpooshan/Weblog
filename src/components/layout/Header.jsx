import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { LibraryBooks as LibraryBooksIcon } from "@mui/icons-material";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" flex={1} fontWeight={700}>
            وبلاگ بوتواستارت
          </Typography>
          <LibraryBooksIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
