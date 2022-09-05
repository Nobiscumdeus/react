import React, { Component } from 'react'
//HERE WE WOULD USE THE CLASS COMPONENTS

class Hello extends Component {
    render(){
        const{name,heroName}=this.props 
        //const {state1,state2}=this.state
        return(
            <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
        )
    }
}
export default Hello;