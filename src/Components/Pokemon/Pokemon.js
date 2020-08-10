import React, { Component } from "react";
import ApiService from "../../utils/ApiService";
import Header from "../Header/Header";
import { withStyles } from "@material-ui/core/styles";
import { capitalizeFirstLetter } from "../../utils/StringUtils";

const styles = () => ({
  divPai: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "70%",
    margin: "auto",
  },
  image: {
    flexGrow: "2",
    width: "30%",
  },
  divStats: {
    flexGrow: "3",
    display: "flex",
    flexDirection: "column",
  },
  rowStats: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  cardDiv: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  stats: {
    display: "flex",
    border: "1px solid",
    boxShadow: "2px 2px 2px #888",
    width: "100%",
    padding: "4px",
  },
});

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      nome: null,
      imageUrl: null,
      altura: null,
      tipos: null,
    };
  }

  getPokemon() {
    ApiService.GetPokemon(this.props.match.params.id).then((res) => {
      const pokemon = res;
      let atributos = pokemon.stats.map((elem) => {
        const statName = elem.stat.name;
        const stat = elem.base_stat;
        return {
          statName,
          stat,
        };
      });

      let tipos = pokemon.types.map((elem) => elem.type.name);
      const tiposFixed = tipos.join(", ");
      this.setState({
        nome: pokemon.name,
        imageUrl: pokemon.sprites.front_default,
        altura: pokemon.height,
        tipos: tiposFixed,
        stats: atributos,
      });
    });
  }

  componentDidMount() {
    this.getPokemon(this.props.match.params.id);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Header />
        <div className={classes.divPai}>
          <img src={this.state.imageUrl} className={classes.image}></img>
          <div class="column" className={classes.divStats}>
            <div class="column">
              <h1 className={classes.stats}>
                Nome: {capitalizeFirstLetter(this.state.nome)}
              </h1>
              <h1 className={classes.stats}>Número: {this.state.id}</h1>
              {this.state.stats != null ? (
                this.state.stats.map((elem) => (
                  <h1 className={classes.stats}>
                    {capitalizeFirstLetter(elem.statName)}: {elem.stat}
                  </h1>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
              <h1 className={classes.stats}>Tipos: {this.state.tipos}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles())(Pokemon);
