import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import ApiService from "../../utils/ApiService";
import { capitalizeFirstLetter } from "../../utils/StringUtils";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const styles = () => ({
  gridContainer: {
    paddingTop: "30px",
  },
  root: {
    flexGrow: 1,
    justifyItems: "center",
  },
  gridItems: {
    display: "flex",
    height: "100%",
    flexGrow: 15,
  },
});

class PokemonList extends Component {
  state = {
    pokemon: null,
  };

  componentDidMount() {
    ApiService.PokemonsListener().then((res) => {
      const pokemons = res.results.map((pokemon) => {
        const urlSplit = pokemon.url.split("/");
        const id = urlSplit[urlSplit.length - 2];
        return {
          id,
          nome: capitalizeFirstLetter(pokemon.name),
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });
      this.setState({ pokemons });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid
          container
          spacing={4}
          // className={classes.gridContainer}
        >
          {this.state.pokemons ? (
            this.state.pokemons.map((pokemon) => (
              <Grid
                item
                // alignItems="center"
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                justify="center"
                className={classes.gridItems}
              >
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  nome={pokemon.nome}
                  imageUrl={pokemon.imageUrl}
                />
              </Grid>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles())(PokemonList);
