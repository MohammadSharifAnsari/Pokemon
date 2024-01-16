
import {Routes,Route} from 'react-router-dom';
import Pokedex from '../components/pokedex/pokedex.jsx';
import PokemonDetails from '../components/pokemonDetails/pokemonDetails.jsx';

//now we enable aroutes in this file

function CustomRoutes(){

    return(
<Routes>

<Route path='/' element={<Pokedex/>} />
{/* '/' path par pokedex component render hoga */}
<Route path='/pokemon/:id' element={<PokemonDetails/>} />
{/* :id is variable it is url params id can be 12 ,13,14,my,18 */}
{/* path me server link ke aage ka path dete hai */}
<Route/>

</Routes>

    )

}

// ab custom routes ko use karenge in App.jsx me like components then it works fine
export default CustomRoutes;