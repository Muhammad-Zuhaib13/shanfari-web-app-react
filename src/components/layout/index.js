import { Grid } from "@mui/material";
import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Navbar />
      {children}
      <Footer />
    </Grid>
  );
};

export default Layout;
