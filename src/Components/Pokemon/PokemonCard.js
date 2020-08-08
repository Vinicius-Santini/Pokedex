import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 360,
  },
}));

const PokemonCard = ({ id, nome, imageUrl }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <Typography color="textSecondary" component="h5">
            N°{id}
          </Typography>
          <Typography color="primary" component="h5">
            {nome}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          disableElevation
        >
          Favoritar
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
