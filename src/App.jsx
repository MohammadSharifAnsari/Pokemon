
import './App.css'
import Pokedex from './components/pokedex/pokedex.jsx'
import CustomRoutes from './routes/CustomRoutes.jsx';
import { Link } from 'react-router-dom';
function App() {
 

  return (
    <div className='outer-pokedex'>
    <Link to="/">
    <h1 id="pokedex-heading">
Pokedex
</h1>   
    </Link>
    {/* CustomRoutes  ke alawa jo bhi likhenge yahan woh render hogi in every page */}
    <CustomRoutes/>
     
    {/* <Pokedex/> */}
    </div>
  )
}

export default App
