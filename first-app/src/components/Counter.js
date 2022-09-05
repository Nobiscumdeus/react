import React, { Component } from 'react'
class Counter extends Component{
   constructor(props){
       super(props)
       this.state={
           count:0
       }
   }
  increment(){
      this.setState({
          count:this.state.count+1
      },()=>{console.log('callback value',this.state.count)})
      console.log(this.state.count)
  }
  //Incrementing five times
  //1. Always make use of setState and do not modify the state directly
  //2. code has to be executed after the state has been updated?Place that code in the call back function which
  //... is the second argument to the setState method
  //3. When you have to update state based on the previous state value,pass in a function as an argument instead
  //... of the regular object
  incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }
    render(){
        return(
            <div>
                <h1>Count -{this.state.count}</h1>
                <button onClick={()=>this.increment()}>Increment</button>

                <button onClick={()=>this.incrementFive()}>Five times</button>

            </div>
        )
    }
}
export default Counter