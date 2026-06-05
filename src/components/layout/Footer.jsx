import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        پروژه وبلاگ با GraphQL | توسعه داده شده توسط{" "}
        <a
          href="https://github.com/parsamehrpooshan"
          target="_blank"
          rel="noreferrer"
        >
          Parsa Mehrpooshan
        </a>
      </Typography>
    </footer>
  );
}

export default Footer;
