import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
 state = {
   name: 'Alvaro',
   newTech: '',
   techs: []
 }
  
 /** 
  * Executed when the component is mounted in the screen
  * A good use example would be to call an external API on this func
  * So the information can be used to set the state.
  */ 
 
 componentDidMount() {
  const techs = localStorage.getItem('techs');

  if(techs) {
    this.setState({ techs: JSON.parse(techs) });
  }
 }
/**
 * Executed when there are changes in the props or state
 */
 componentDidUpdate(prevProps, prevState) {
  // compare prevProps with this.props
  // compare prevState with this.state

  if(prevState.techs !== this.state.techs){
    localStorage.setItem('techs', JSON.stringify(this.state.techs))
    //localStorage does not accept array. So we turn it into a JSON
  }

 }

 /**
  * Executed when a component ceases to exist 
  */
 componentWillUnmount() {

 }

 handleInputChange = e => {
  this.setState({ newTech: e.target.value })
 }

 handleSubmit = e => {
   e.preventDefault();

   this.setState({ 
     techs: [... this.state.techs, this.state.newTech],
     newTech: ''
    });
 }

handleDelete = (tech) => {
  this.setState({techs: this.state.techs.filter(t => t !== tech)});
  
}

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello {this.state.name}</h1>
        <ul>
          {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}
              /> 
            )}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Add Tech</button>
      </form>
    );
  }
}

export default TechList;