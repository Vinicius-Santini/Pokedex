import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import Header from "../../Components/Header/Header";
import PokemonList from "../../Components/Pokemon/PokemonList";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container fixed>
          <PokemonList />
        </Container>
      </Fragment>
    );
  }
}

export default Home;
