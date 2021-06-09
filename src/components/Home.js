import React from "react";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/movies/movies";
import Moviecardlist from "./Moviecardlist";
import Button from "@material-ui/core/Button";

const Home = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies({ query: "welcome", page: page }));
  }, [dispatch]);

  const changePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getMovies({ query: "welcome", page: page }));
  }, [page]);

  return (
    <>
      <Navbar>
        <h1>Home</h1>
        <Grid container>
          {movies ? <Moviecardlist movielist={movies} /> : ""}
        </Grid>
        <Button onClick={changePage}>hello</Button>
      </Navbar>
    </>
  );
};

export default Home;
