import React,{ Component } from 'react';
import './App.css';
//import Greet from './components/Greet';
//import Hello from './components/Hello';
//import Welcome from './components/Welcome';
//import Message from './components/Message';
//import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Greet/> */}
        {/* <Hello /> */}
        {/* 
        <Greet name="Bruce" heroName="Batman"> 
        <button> Click me  </button>
        </Greet>
        <Greet name="Clark" heroName="Superman" />
        <Greet name="Diana" heroName="Wonder woman" />
        <Welcome/>
        <Hello name="Nobiscumdeus" heroName="Author of Chasfat_Project$" />
         <Greet />
        <Message />
        <Counter />
        */}
       
       
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind />
        <ParentComponent />
      </div>
    )
  }
}
export default App;