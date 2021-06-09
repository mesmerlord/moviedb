import React from "react";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/movies/movies";
import Moviecardlist from "./Moviecardlist";

const Home = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies("welcome"));
  }, [dispatch]);

  return (
    <>
      <Navbar>
        <h1>Home</h1>
        <Grid container>
          {movies ? <Moviecardlist movielist={movies} /> : ""}
        </Grid>
      </Navbar>
    </>
  );
};

export default Home;
