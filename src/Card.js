import React from 'react';
import 'tachyons';
import'./card.css';

const Card=({name, id, email,onRouteChange})=>{

return(
<div className="bg-light-yellow  ma2 pa4 br3 dib  tc" id="card">
     <img alt="guy" src={`https://robohash.org/${id}/?size=180x180`}/>
      <div>
          <h2> {name}</h2>
          <p> {email}</p>
      </div>
      <button onClick={() => onRouteChange({id})}>More..</button>
 </div>      
	);
}

export default Card;