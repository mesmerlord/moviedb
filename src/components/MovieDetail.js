import React from "react";
import Navbar from "./Navbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import spacing from "@material-ui/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addFavorite } from "../redux/movies/movies";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginBottom: "1em",
  },
}));

const MovieDetail = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const [loading, setLoading] = useState(true);

  const [inFavorites, setInFavorites] = useState(false);

  const checkFavorites = () => {
    const data = {
      name: movieDetail.Title,
      image: movieDetail.Poster,
      id: movieDetail.imdbID,
      year: movieDetail.Year,
    };

    for (let i = 0; i < favorites.length; i++) {
      console.log(data.id, favorites[i].id);
      if (data.id == favorites[i].id) {
        setInFavorites(true);
      }
    }
  };

  const classes = useStyles();

  const addToFavorites = () => {
    const dataToSend = {
      name: movieDetail.Title,
      image: movieDetail.Poster,
      id: movieDetail.imdbID,
      year: movieDetail.Year,
    };
    dispatch({
      type: "ADD_FAVORITE",
      payload: dataToSend,
    });
    setInFavorites(true);
    console.log(favorites);
  };

  const removeFromFavorites = () => {
    const dataToSend = {
      name: movieDetail.Title,
      image: movieDetail.Poster,
      id: movieDetail.imdbID,
      year: movieDetail.Year,
    };
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: dataToSend,
    });
    setInFavorites(false);
    console.log(favorites);
  };

  const getMovie = (id) => {
    setLoading(true);
    const response = axios
      .get(`https://omdbapi.com/?apikey=57446276&i=${id}`)
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
    checkFavorites();
  }, []);

  useEffect(() => {
    getMovie(id);
  }, [id]);
  useEffect(() => {
    checkFavorites();
  }, [movieDetail]);

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
                {!inFavorites ? (
                  <Tooltip title="Add to favorites">
                    <IconButton onClick={addToFavorites}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Remove from favorites">
                    <IconButton onClick={removeFromFavorites}>
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                )}
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
