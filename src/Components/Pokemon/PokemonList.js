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
    // paddingLeft: "40px",
    // paddingRight: "40px",
    paddingTop: "30px",
  },
  root: {
    flexGrow: 1,
    justifyItems: "center",
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
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            alignItems="center"
          >
            {this.state.pokemons ? (
              this.state.pokemons.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
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
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles())(PokemonList);
