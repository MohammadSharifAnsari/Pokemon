
import { useEffect, useState } from "react";
import axios from "axios";

// if type true then hum log kisi particular type ke liye query kar rhe hain
function usePokemonList(type){

    const [pokemonListState,setPokemonListState]=useState({
        pokemonList:[],
        isLoading:false,
        nextUrl:'',
        prevUrl:'',
        POKEDEX_URL:"https://pokeapi.co/api/v2/pokemon",
    type:'',
    
    })



    async function  fetchdata (){
        // setIsLoading(true);
   
     

    setPokemonListState((state)=>({...state,isLoading:true}));
    console.log("is loading",pokemonListState.isLoading);
        
        const responce=await axios.get(pokemonListState.POKEDEX_URL);
        // setNextUrl(responce.data.next);
        // setPrevUrl(responce.data.previous);
        setPokemonListState((state)=>({...state,nextUrl:responce.data.next,prevUrl:responce.data.previous}));
        console.log("reponce =>",responce);
        console.log("obj is",pokemonListState);
        console.log("res is :",responce.data.pokemon);
        
        const pokemonResults=responce.data.results;
        console.log("pokemon result",pokemonResults);
        
        // setIsLoading(false);
        setPokemonListState((state)=>({...state,isLoading:false}));
        console.log("hum dekhenge");
        console.log(pokemonListState.isLoading);


      const pokemonResultsPromise=pokemonResults&&pokemonResults.map((pokemon)=>{return  axios.get(pokemon.url) });
     const pokemonData=pokemonResultsPromise&& await axios.all(pokemonResultsPromise);
     //axios.all same as promise.all when all promise get resolve then pokemonData get value
   console.log(pokemonData);//pokemonData is an array jiske andarobject store hai
const res=pokemonData&&pokemonData.map((pokeData)=>{
const pokemon=pokeData.data;
return {
id:pokemon.id,
   name:pokemon.name,
   image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
   types:pokemon.types

}
})
console.log(res);
// setPokemonList(res);
setPokemonListState((state)=>({...state,pokemonList:res}));
console.log("pokemon list is :",pokemonListState);
// setPokemonList([1,2,3,4]);
    
    
}

useEffect(()=>{
fetchdata();
},[pokemonListState.POKEDEX_URL]);

return [pokemonListState,setPokemonListState];
    
}

export default usePokemonList;