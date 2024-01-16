
import './PokemonList.css';
import Pokemon from "../pokemon/pokemon.jsx";
import usePokemonList from '../../hooks/usePokemonList.js';


//kisi bhi pokemon ki picture par click karne par uski saari information display ho jae we want that when we click pokemon hum chahte hain ki koi nya page khule

// Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons


function PokemonList(){
    // const [POKEDEX_URL,setPOKEDEX_URL]=useState("https://pokeapi.co/api/v2/pokemon");
    
    //     const[pokemonList,setPokemonList]=useState([]);
    //     const [isLoading,setIsLoading]=useState(true);
    // const [nextUrl,setNextUrl]=useState('');
    // const [prevUrl,setPrevUrl]=useState('');
//     const [pokemonListState,setPokemonListState]=useState({
//         pokemonList:[],
//         isLoading:false,
//         nextUrl:'',
//         prevUrl:'',
//         POKEDEX_URL:"https://pokeapi.co/api/v2/pokemon"
    
    
//     })

//     async function  fetchdata (){
//          // setIsLoading(true);
//     setPokemonListState((state)=>({...state,isLoading:true}));
//     console.log(pokemonListState.isLoading);
        
//         const responce=await axios.get(pokemonListState.POKEDEX_URL);
//         console.log(responce.data);
//         // setNextUrl(responce.data.next);
//         // setPrevUrl(responce.data.previous);
//         setPokemonListState((state)=>({...state,nextUrl:responce.data.next,prevUrl:responce.data.previous}));
//         console.log("obj is",pokemonListState);
        
//         const pokemonResults=responce.data.results;
//         console.log(pokemonResults);
// pokemonResults-> isme array store hai in which wvery element contain information as name and url for a particular pokemon
        
//         // setIsLoading(false);
//         setPokemonListState((state)=>({...state,isLoading:false}));
//         console.log("hum dekhenge");
//         console.log(pokemonListState.isLoading);

//        const pokemonResultsPromise=pokemonResults.map((pokemon)=>{return  axios.get(pokemon.url) });
//       const pokemonData=await axios.all(pokemonResultsPromise);
//       //axios.all same as promise.all when all promise get resolve then pokemonData get value
//     console.log(pokemonData);//pokemonData is an array jiske andarobject store hai
// const res=pokemonData.map((pokeData)=>{
// const pokemon=pokeData.data;
// return {
// id:pokemon.id,
//     name:pokemon.name,
//     image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
//     types:pokemon.types

// }
// })
// console.log(res);
// // setPokemonList(res);
// setPokemonListState((state)=>({...state,pokemonList:res}));
// console.log("pokemon list is :",pokemonListState);
// // setPokemonList([1,2,3,4]);

     
// }


// useEffect(()=>{
   

//  fetchdata();
//     },[pokemonListState.POKEDEX_URL]);
    

const [pokemonListState,setPokemonListState]=usePokemonList(false);


return (


<div className="pokemon-list-wrapper">
    {/* <div>

pokemon 
    </div> */}


<div className="pokemon-wrapper">


{pokemonListState.isLoading?'Loading...':pokemonListState.pokemonList.map((p)=>{
    return <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>
})}
{/* here we can use O loading icon */}

</div>


<div className="controls">
    <button disabled={pokemonListState.prevUrl==null} onClick={()=>{ setPokemonListState({...pokemonListState,POKEDEX_URL:pokemonListState.prevUrl}) }}>Prev</button>
    <button disabled={pokemonListState.nextUrl==null} onClick={()=>{setPokemonListState({...pokemonListState,POKEDEX_URL:pokemonListState.nextUrl})}}>Next</button>
</div>


</div>
)

}


export default PokemonList;