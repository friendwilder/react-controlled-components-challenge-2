import React, { Component } from "react";

class PokeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mockPokemonData = this.props.mockPokemonData.sort();

    return (
      <div>
        <ol className="pokemon-list">
          {mockPokemonData.map((pokemon, index) => (
            <li key={pokemon.name} className="pokemon-list-item">
              <div className="pokemon-info">
                <h1>{pokemon.name}</h1>
                <a href={pokemon.videoLink} target="_blank" rel="noreferrer">
                  <img
                    alt={pokemon.name}
                    onMouseOver={(event) =>
                      (event.currentTarget.src = pokemon.sprites.front_shiny)
                    }
                    src={pokemon.sprites.front_default}
                    onMouseOut={(event) =>
                      (event.currentTarget.src = pokemon.sprites.front_default)
                    }
                    onError={(event) =>
                      (event.currentTarget.src = pokemon.sprites.back_default)
                    }
                  />
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
