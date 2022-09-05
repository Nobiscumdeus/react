import React from 'react'

/*
function Greet(){
    return <h1> Hello from Chasfat_Projects$ </h1>
}
*/
//Now using the function with props short for properties to add dynamism 
//We intend to use the greet function as a constant or inline
//HERE WE HAVE USED THE FUNCTIONAL COMPONENTS
const Greet=props=>{
    const{name,heroName}=props

    
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName} </h1>
            
        </div>
    )
}

export default Greet;