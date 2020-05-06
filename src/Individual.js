import React from 'react';
import './ind.css';

const Individual=({name, id, email,onRouteChange})=>{

return(
	<div className='ind'>
	<h1 >{name}'s Blog</h1>
     <img className='im'alt="guy" src={`https://robohash.org/${id}/?size=180x180`}/>
      <div>
          <p> {email}</p>
          <p id='title'>Title</p>
      </div>
      <div className='content'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat aliquet finibus.
       Nullam congue felis ac convallis lacinia. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Vestibulum nec elit auctor, gravida nulla eget,
         congue enim. Suspendisse eu posuere arcu. Fusce ligula ex, faucibus maximus elit a, blandit faucibus augue
         . Vivamus pretium, ante ac sodales pulvinar, quam metus eleifend leo, at dignissim sapien erat sit amet enim.
          Sed ultrices blandit odio a interdum. Aliquam a odio diam. Praesent in enim lorem. Nullam hendrerit aliquet 
          justo, non hendrerit ex pretium in. Sed congue posuere turpis. Cras a risus ornare, mollis ipsum in, malesuada quam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat aliquet finibus.
       Nullam congue felis ac convallis lacinia. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Vestibulum nec elit auctor, gravida nulla eget,
         congue enim. Suspendisse eu posuere arcu. Fusce ligula ex, faucibus maximus elit a, blandit faucibus augue
         . Vivamus pretium, ante ac sodales pulvinar, quam metus eleifend leo, at dignissim sapien erat sit amet enim.
          Sed ultrices blandit odio a interdum. Aliquam a odio diam. Praesent in enim lorem. Nullam hendrerit aliquet 
          justo, non hendrerit ex pretium in. Sed congue posuere turpis. Cras a risus ornare, mollis ipsum in, malesuada quam.
		</div>
    
 </div>      
	);
}

export default Individual;