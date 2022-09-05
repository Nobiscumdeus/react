import React, { Component } from 'react'
class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
        //As part of the constructor now to bind this
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Goodbye'
        })
        console.log(this)
     
    }
/* lastly we could have finished it from here by revising it in an arrow function
    clickHandler=()=>{
        this.setState({
            message:'Goodbye'
        })
    }


*/
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
              {/*  <button onClick={this.clickHandler.bind(this)}> Press</button>
                 using the arrow function approach*/}
               {/*  <button onClick={()=>this.clickHandler()}>Press</button>
               using the last approach since we already updated the constructor  */}
               <button onClick={this.clickHandler}>Press</button>
               
            </div>
        )
    }
}
export default EventBind