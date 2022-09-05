import React from 'react';
const Welcome=()=>{
    //Below is a way of using jsx
  //  return(

        
       // <div className='dummyclass'>
       //     <h1>Hello Viewers</h1>
       // </div>
        
  // Now let's quit it to use what React provides us )
  return React.createElement('div',{id:'hello',className:'dummyclass'},React.createElement('h1',null,'Hello Brethren'))
}
export default Welcome;