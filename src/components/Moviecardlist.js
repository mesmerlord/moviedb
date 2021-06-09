import React from "react";
import Moviecard from "./Moviecard";
import Grid from "@material-ui/core/Grid";

const Moviecardlist = ({ movielist }) => {
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
  return <> {listToRender} </>;
};

export default Moviecardlist;
