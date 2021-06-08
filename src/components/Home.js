import React from "react";
import Moviecard from "./Moviecard";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import { spacing } from "@material-ui/system";

const Home = () => {
  const cardItems = [
    { name: "Hello", key: 1 },
    { name: "hello", key: 2 },
    { name: "Hello", key: 3 },
    { name: "Hello", key: 4 },
    { name: "Hello", key: 5 },
  ];
  const items = cardItems.map((item) => {
    return (
      <Grid item md={3} xs={5} key={item.key}>
        <Moviecard title={item.name} />
      </Grid>
    );
  });
  useEffect(() => {
    console.log(items);
  }, []);
  return (
    <>
      <Navbar>
        <h1>Home</h1>
        <Grid container>{items}</Grid>
      </Navbar>
    </>
  );
};

export default Home;
