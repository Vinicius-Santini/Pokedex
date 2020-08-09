import React, { Component } from "react";
import ApiService from "../../utils/ApiService";
import Header from "../Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  box: {
    height: "100%",
    width: "100%",
    // position: "absolute",
    color: "#f5f5f5",
  },
}));

const Pokemon = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className="columns">
        <div className="column">
          <div style={{ padding: 20 }}>{/* <img src={} /> */}</div>
        </div>
        <div className="column is-three-quarters pokemon-info">
          <div className="content">
            <h1>{props.match.params.id}</h1>

            <h2
              className="subtitle is-2 has-text-weight-light"
              style={{ display: "inline-block" }}
            ></h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pokemon;
