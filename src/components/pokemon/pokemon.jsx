
import './pokemon.css';
import { Link } from 'react-router-dom';

//yaham par <a></a> tag lagakar hum click karne par new page me ja rhe hain ye kar sakte hai but isse page refresh hoga then single page applicatio  ka goal achive nhi ho paega
function Pokemon({name,image,id}){

return( <div className='pokemon'>
    {/* humne yahan sirf /pokemon/2 path kyun diya poora http karke kyun nhi diya because hum ek url par honge then link par click karne se us url ke aage to="/pokemon/2" property add ho jaegi */}
<Link to={`/pokemon/${id}`}>
<div className='pokemon-name'>{name}</div>
<div>

<img className="pokemon-img" src={image} alt="image not load" />
</div>
</Link>

</div>)

}
export default Pokemon;