import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 345,
    backgroundColor: "#fafafa",
  },
  media: {
    height: 360,
    backgroundColor: "#eeeeee",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numero: {
    color: "#757575",
    fontSize: "17px",
  },
  fav: {
    color: "#ef5350",
  },
  nome: {
    color: "#212121",
    fontSize: "19px",
  },
}));

const PokemonCard = ({ id, nome, imageUrl }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card
      className={classes.root}
      onClick={() => history.push(`/pokemon/${id}`)}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <Typography
            color="textSecondary"
            component="h5"
            className={`${classes.flex} ${classes.numero}`}
          >
            N°{id}
            <IconButton>
              <FavoriteBorderIcon className={classes.fav}></FavoriteBorderIcon>
            </IconButton>
          </Typography>
          <Typography color="primary" component="h5" className={classes.nome}>
            {nome}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
