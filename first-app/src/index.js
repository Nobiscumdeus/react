/** import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//import ReactDOM from 'react-dom';

//React.createElement


//These were the informations i met here, I want to now follow a new tutorial

**/
/** 
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
//import App from './App.js';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

//const element=<h1> Hello world from Nobiscumdeus </h1>;
//ReactDOM.render(<Counter/>,document.getElementById("root"));
//ReactDOM.render(<App/>,document.getElementbyId('root'));
**/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//const myFirstElement=<h1> Chasfat_Projects is now experimenting with the React Library</h1>
//const root=ReactDOM.createRoot(document.getElementById('root'));
//root.render(myFirstElement);
//registerServiceWorker();
//ServiceWorker.unregister();