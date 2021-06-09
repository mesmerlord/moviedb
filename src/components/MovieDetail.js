import React from "react";
import Navbar from "./Navbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import spacing from "@material-ui/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginBottom: "1em",
  },
}));

const MovieDetail = () => {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const getMovie = (id) => {
    setLoading(true);
    const response = axios
      .get(`http://omdbapi.com/?apikey=57446276&i=${id}`)
      .then((res) => {
        const data = res.data;
        setMovieDetail(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    return response;
  };

  useEffect(() => {
    getMovie(id);
    console.log(movieDetail);
  }, []);

  return (
    <>
      <Navbar>
        <Paper>
          {loading ? (
            <Grid container alignItems="center" justify="center">
              <CircularProgress />
            </Grid>
          ) : (
            <>
              <Grid container alignItems="center" justify="center">
                <Typography variant="h3" className={classes.grid}>
                  {movieDetail.Title}
                </Typography>
              </Grid>
              <Grid container alignItems="center" justify="center">
                <Paper variant="outlined" className={classes.grid}>
                  <img src={movieDetail.Poster} />
                </Paper>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.grid}
              >
                <Typography variant="h5">Year : {movieDetail.Year}</Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.grid}
              >
                <Typography variant="h5">
                  Rating : {movieDetail.Rated}
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.grid}
              >
                <Typography variant="h5">
                  Date Released: {movieDetail.Released}
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.grid}
              >
                <Typography variant="h5">{movieDetail.Runtime}</Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.grid}
              >
                <Typography variant="h5">
                  Genres : {movieDetail.Genre}
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.grid}
              >
                <Grid item md={10}>
                  <Typography variant="h6">
                    Plot : {movieDetail.Plot}
                  </Typography>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
      </Navbar>
    </>
  );
};

export default MovieDetail;
