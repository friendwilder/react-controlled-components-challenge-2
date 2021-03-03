import React from "react";
import PokeCards from "./components/PokeCards";
import "./styles.css";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      {/**
        Render here the list of pokemons
      */}
      <PokeCards mockPokemonData={mockPokemonsData.sort()} />
    </div>
  );
}
