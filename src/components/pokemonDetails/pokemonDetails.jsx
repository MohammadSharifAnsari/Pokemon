
import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
import './pokemonDetail.css';
import usePokemonDetails from "../../hooks/usePokemonDetail.js";
// import usePokemonList from "../../hooks/usePokemonList.js";
// import { Link } from "react-router-dom";
function PokemonDetails({pokemonName}){
console.log("start 11");
    const {id}=useParams();
    console.log(id);
//     const [pokemon,setPokemon]=useState({});
//     let pokemonHOOKResponce=[];
// // pokemon details page par aane ke liye jis url ki zarurat hogi us url se url params nikal laega useParams()
// // let wt;
// // let name;

// async function DownloadDetail(){

//     console.log("download start:");
//     const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     console.log("responce data",res.data);
//     setPokemon({
//         name:res.data.name,
//         image:res.data.sprites.other.dream_world.front_default,
//         weight:res.data.weight,
//         height:res.data.height,
//         types:res.data.types.map((el)=>{ return el.type.name})
//     })
//     [pokemonHOOKResponce]=usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types?pokemon.types[0]:'fire'}`,true);
// // wt=res.data.weight;
// // name=res.data.name;

// console.log("download end:");

// }

// console.log("up to useEffect")
// useEffect(()=>{
//     console.log("inside useeffect");
//     DownloadDetail()
// },[]);
//pehle types set ho jae then hum log isko download karenge

// const {pokemonListState,setPokemonListState}=usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types?pokemon.types[0]:'fire'}`,true);

const [pokemon]=usePokemonDetails(id,pokemonName);



return (<div className="pokemon-details-wrappper">

{console.log("inside return")}
<img className="pokemon-image" src={pokemon.image} alt="image not load" />
<div className="pokemon-detail-name">

name: <span> {pokemon.name}</span>
</div>
<div className="pokemon-detail-name">

weight:{pokemon.weight}
</div>
<div className="pokemon-detail-name">

height:{pokemon.height}
</div>
<div className="pokemon-details-types">

  {
   pokemon.types&&pokemon.types.map((el)=>{return <div key={el}>{el}</div>})
  }

</div>

{
pokemon.types&&pokemon.similarPokemon &&<div>
more {pokemon.types[0]} types pokemon

<ul>
{pokemon.similarPokemon.map((el,idx)=>{
return <li key={idx}>{el.pokemon.name}</li>
})
}
</ul>

</div>
}




{/* <h1>{wt}</h1>
<h1>{name}</h1> */}
{/* {
pokemon.types&&
<div>

more {pokemon.types[0]} pokemons

<ul>
{
    pokemonHOOKResponce.pokemonList&&pokemonHOOKResponce.pokemonList.map((el)=>{
        return <li key={el.pokemon.url}> name {el.pokemon.name}  </li>
    })
}

</ul>
    </div>
} */}



</div>)

}

export default PokemonDetails;