import React from 'react';
import ReactDOM from 'react-dom/client';

//const myFirstElement=<h1> Hello React from Chasfat_Project$</h1>
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myFirstElement);
const myArray=['Apple','Banana','Orange']
const myList=myArray.map((item) => <p>{item}</p> )

const vehicleOne={
  brand:'Ford',
  model:'Mustang',
  type:'car',
  year:2021,
  color:'red',
  registration:{
    city:'Houston',
    state:'Texas',
    country:'USA'
  }
}
myVehicle(vehicleOne)
function myVehicle({model,brand,registration:{state}}){
  const message='My '+ model + 'with the brand name' + brand + 'is registered in ' + state + '.';
  document.getElementById("demo").innerHTML=message;
}
ReactDOM.render(myList,document.getElementById('root'));