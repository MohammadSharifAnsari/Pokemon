
import { useState ,useEffect} from "react";
import axios from "axios";


function usePokemonDetails(id,pokemonName){
    
    const [pokemon,setPokemon]=useState({});

// pokemon details page par aane ke liye jis url ki zarurat hogi us url se url params nikal laega useParams()
// let wt;
// let name;

async function DownloadDetail(){
try {
    console.log("download start:");
    let res;
    if(pokemonName){
        console.log("error hai hum");
         res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
         console.log("axios ka responce >",res);
        }
        else{
        res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
    }
    
    const pokemonSameTypes= await axios.get(`https://pokeapi.co/api/v2/type/${res.data.types?res.data.types[0].type.name:'fire'}`);
    console.log("pokemonSameType",pokemonSameTypes);
        console.log("responce data",res.data);
        setPokemon({
            name:res.data.name,
            image:res.data.sprites.other.dream_world.front_default,
            weight:res.data.weight,
            height:res.data.height,
            types:res.data.types.map((el)=>{ return el.type.name}),
            similarPokemon:pokemonSameTypes.data.pokemon.slice(0,5)
        })
        
        // `https://pokeapi.co/api/v2/type/${pokemon.types?pokemon.types[0]:'fire'}`
    // wt=res.data.weight;
    // name=res.data.name;
    
    setPokemonListState({...pokemonListState,type:res.data.types?res.data.types[0].type.name:''});
    
    
    console.log("download end:");
} catch (error) {
    console.log("something went wrong ");
}
   

}
const [pokemonListState,setPokemonListState]=useState({});

useEffect(()=>{
    console.log("inside useeffect");
    DownloadDetail()
},[pokemonListState.POKEDEX_URL]);
// pokemonSameTypes.data.pokemon array of object
return [pokemon];

}


export default usePokemonDetails;