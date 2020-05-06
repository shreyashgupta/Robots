import React,{Component} from'react';
import Cardlist from'./Cardlist';
import './app.css';
import Searchbox from'./Searchbox';
import Individual from'./Individual'; 


class App extends Component 
{constructor() {
     super()
	this.state={
		robots:[],
		serachfield:'',
		route:0
	}
}
onSearchChange=(event)=>{
	this.setState(Object.assign(this.state.serachfield,{serachfield:event.target.value}))
	console.log(this.state.route)
}
onRouteChange=(id)=>
{
	console.log(id['id']);
	this.setState(Object.assign(this.state.route,{route:id['id']}))
}
componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState(Object.assign(this.state.robots,{robots:users})));
  }
render(){
           const filter=this.state.robots.filter(robot=>
           {
	           return robot.name.toLowerCase().includes(this.state.serachfield.toLowerCase());
	       } 
	    )
	       return (
	       			this.state.route===0?
	       		   <div className="tc">  
	       		    <header id="fixed">
		        <h1 className="f0"> ROBO-FRIENDS</h1>
		        <Searchbox onSearchChange={this.onSearchChange}/>
		        		   </header>
		        <Cardlist robots={filter}
		        			onRouteChange={this.onRouteChange}/>
		        <a href="xyz.html">go  back</a>
 		        </div>:<Individual 
 		       			key = {this.state.route}
                       id={this.state.robots[this.state.route-1].id} 
                       name={this.state.robots[this.state.route-1].name} 
                       email={this.state.robots[this.state.route-1].email}
                       onRouteChange={this.onRouteChange}/>
 		        )
       ;}
} 

export default App;