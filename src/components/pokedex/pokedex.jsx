import Search from "../search/search.jsx";
import './pokedex.css';
import { useState } from "react";
import PokemonList from "../pokemonList/pokemonlist.jsx";
import PokemonDetails from "../pokemonDetails/pokemonDetails.jsx";
function Pokedex(){

    const [searchTerm,setSearchTerm]=useState('');


    return  (<div className="pokedex-wrapper">

{/* <h1 id="pokedex-heading">
Pokedex
</h1>     */}

<Search updateSearchTerm={setSearchTerm}/>
{searchTerm.length==0?<PokemonList/>:<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}

    </div>)


}

export default Pokedex;