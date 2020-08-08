import React from "react";
import "./App.css";
import PokemonList from "./Components/Pokemon/PokemonList";
import Header from "../src/Components/Header/Header.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <PokemonList />
    </React.Fragment>
  );
}

{
  /* <Fragment>
  <Header />
  <div className="container mb-10">
    <PokemonList />
  </div>
</Fragment>; */
}

export default App;
