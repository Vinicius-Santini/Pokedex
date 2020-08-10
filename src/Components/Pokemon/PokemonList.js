import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import ApiService from "../../utils/ApiService";
import { capitalizeFirstLetter } from "../../utils/StringUtils";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import Pagination from "@material-ui/lab/Pagination";

const styles = () => ({
  gridContainer: {
    paddingTop: "30px",
    width: "100%",
    margin: 0,
    backgroundColor: "#eeeeee",
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
  pages: {
    "& > *": {
      marginTop: "10px",
    },
  },
  pagesDiv: {
    backgroundColor: "#eeeeee",
    justify: "center",
    display: "flex",
    justifyContent: "space-around",
  },
  searchBar: {
    width: "50%",
  },
  searchBardiv: {
    backgroundColor: "#eeeeee",
    paddingTop: "40px",
    display: "flex",
    justifyContent: "space-around",
  },
});

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      pokemonsView: null,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  getPokemonList(page) {
    ApiService.PokemonsListener(page).then((res) => {
      const pokemons = res.results.map((pokemon) => {
        const urlSplit = pokemon.url.split("/");
        const id = urlSplit[urlSplit.length - 2];
        return {
          id,
          nome: capitalizeFirstLetter(pokemon.name),
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });
      this.setState({ pokemons, pokemonsView: pokemons, count: res.count });
    });
  }

  componentDidMount() {
    this.getPokemonList(1);
  }

  handlePageChange(event, page) {
    this.getPokemonList(page);
  }

  searchFunction(value) {
    const { pokemons } = this.state;

    const filtereds = pokemons.filter((x) => {
      return x.nome.toLowerCase().includes(value) || x.id.toString() === value;
    });
    this.setState({
      pokemonsView: filtereds,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.searchBardiv}>
          <SearchBar
            placeholder="Pesquise pelo nome ou número"
            className={classes.searchBar}
            value={this.state.value}
            onChange={(value) => this.searchFunction(value)}
          />
        </div>

        <Grid container spacing={4} className={classes.gridContainer}>
          {this.state.pokemonsView ? (
            this.state.pokemonsView.map((pokemon) => (
              <Grid
                item
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
        <div className={classes.pagesDiv}>
          <Pagination
            count={~~(this.state.count / 10)}
            onChange={this.handlePageChange}
            size="large"
          />
        </div>
      </>
    );
  }
}

export default withStyles(styles())(PokemonList);
