import React, { Component } from "react";

class PokeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: "false",
      pokemonsData: [],
      testString: ""
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount");
    fetch("pokeData.js")
      .then((response) => response.json())
      .then((result) => {
        const pokemonsData = result.map((pokemon) => {
          return pokemon;
        });
        this.setState({
          // It never gets to the setState because when fetching the file
          // it is not being processed correctly. Using a txt works.
          pokemonsData: pokemonsData,
          loaded: "true"
        });
      });
  }

  handleMouseOver = (event) => {
    console.log(this.state.loaded);
    fetch("pokeData.js")
      .then((response) => response.text())
      .then((text) => {
        // console.log(text);
      });
    this.setState({
      displayedPicture: "shiny"
    });
  };

  render() {
    // console.log(this.props);
    const listPokemons = this.state.pokemonsData.map((pok) => (
      <div>pok.name</div>
    ));
    const mockPokemonData = this.props.mockPokemonData.sort();

    let my_img;
    if (this.state.displayed_picture === "default") {
      my_img = (
        <img
          alt="Pokemon default"
          onMouseOver={this.handleMouseOver}
          src={this.props.mockPokemonData}
        />
      );
    }
    // console.log(my_default)
    return (
      <div>
        <div>{listPokemons}</div>
        <ol className="pokemon-list">
          {mockPokemonData.map((pokemon, index) => (
            <li key={pokemon.name} className="pokemon-list-item">
              <div className="pokemon-info">
                <h1>{pokemon.name}</h1>
                <a href={pokemon.videoLink} target="_blank" rel="noreferrer">
                  <img
                    alt={pokemon.name}
                    onMouseOver={() => this.handleMouseOver(index)}
                    src={pokemon.sprites.front_default}
                  />
                  <img alt="Prueba" src={pokemon.sprites.front_shiny} />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default PokeCards;
/*
<h1>{this.props.mockPokemonData.name}</h1>
<img
  alt="Pokemon front default"
  src={this.props.mockPokemonData.sprites.front_default}
/>
<img
  alt="Pokemon front shiny"
  src={this.props.mockPokemonData.sprites.front_shiny}
/>
<div>
  <a href={this.props.mockPokemonData.video}>Video link</a>
</div> */
