import React from "react";
import "./App.css";
import PokemonList from "./Components/Pokemon/PokemonList";
import Header from "../src/Components/Header/Header.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <React.Fragment>
      <Header />
      <PokemonList />
    </React.Fragment>
  );
}

export default App;
