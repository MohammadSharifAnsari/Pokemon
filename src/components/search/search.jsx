

import { useState } from 'react';
import './search.css';
import useDebounce from '../../hooks/useDebounce.js';
function Search({updateSearchTerm}){

    const debounceCallback=useDebounce((e)=>{updateSearchTerm(e.target.value)});
   
    return <div className='search-wrapper'> 
    
    <input
    id='pokemon-name-search' type="text" 
    placeholder="Pokemon Name..."
    onChange={debounceCallback}// yahan par apneaap debounceCallback call ho jaega when we input on search bar and onchange event debounceCallback ke arguments me chla jaega
// onChange ek event handler hai jo input me value dalne par callBack execute karta hai callback execute karta hai

//search value iske parent pokedex ko bhejenge pokedex decide karega ki parent ki list show karni hai ya koi particular pokemon ki detail display karni hai
    />

    

    </div>


}

export default Search;