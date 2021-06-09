import React from "react";
import Moviecard from "./Moviecard";
import Grid from "@material-ui/core/Grid";

const Moviecardlist = ({ movielist, favorites }) => {
  const listToRender = movielist
    ? movielist.map((item) => {
        return (
          <Grid item md={3} xs={5} key={item.imdbID}>
            <Moviecard
              title={item.Title}
              imagelink={item.Poster}
              date={item.Year}
              id={item.imdbID}
            />
          </Grid>
        );
      })
    : [];
  const favoritesList = favorites
    ? favorites.map((item) => {
        return (
          <Grid item md={3} xs={5} key={item.name}>
            <Moviecard
              title={item.name}
              imagelink={item.image}
              date={item.year}
              id={item.id}
            />
          </Grid>
        );
      })
    : [];
  return <> {!favorites ? listToRender : favoritesList} </>;
};

export default Moviecardlist;
