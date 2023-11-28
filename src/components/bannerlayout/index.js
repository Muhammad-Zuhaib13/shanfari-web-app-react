import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../bannernavbar";
import Footer from "../footer";

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
