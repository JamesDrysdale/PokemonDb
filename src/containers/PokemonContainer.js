import React from 'react';
import PokemonSelect from '../components/PokemonSelect';
import PokemonDetail from '../components/PokemonDetail';

class PokemonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemonUrl: ''
        };

        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    }

    componentDidMount(){
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({pokemons: data.results}))
    }

    handlePokemonSelected(pokemonUrl){
        this.setState({selectedPokemonUrl: pokemonUrl});
    }
    
    
    render(){
        
        const selectedPokemon = this.state.pokemons.find(pokemon => {
            return pokemon.url === this.state.selectedPokemonUrl
        });

        return (
            <div>
                <h2>Pokemon from Red/Blue</h2>
                    <PokemonSelect 
                        pokemons={this.state.pokemons}
                        onPokemonSelected={this.handlePokemonSelected}
                    />
                    <PokemonDetail
                        pokemon={selectedPokemon}
                    />

            </div>
        )
    }


}

export default PokemonContainer;