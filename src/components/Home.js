import React from "react";
import Moviecard from "./Moviecard";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { spacing } from "@material-ui/system";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Grid container justify="center">
        <Grid item md={6} xs={6} justify="center">
          <Box ml={3}>
            <Moviecard />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
