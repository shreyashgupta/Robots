import React from 'react';
import Card  from './Card';

const Cardlist=({robots,onRouteChange})=>
{
  return(
        <div>
              {

           robots.map((user,index)=>
                 {
                 return(   
                     <Card
                       key = {index}
                       id={robots[index].id} 
                       name={robots[index].name} 
                       email={robots[index].email}
                       onRouteChange={onRouteChange}
                     />
                 	   );
                         }                
	                   )
               }    
         </div> 
         )          
}
export default Cardlist;






















