import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ^ that is printing the information to the html page in div root.
// render lives on the react dom and the reactDom is one of the packages installed,
// handles all dom manipulation.
// render makes it happens. makes it render!
// app is the app component. we're importing something we are calling app. taking default export
// which is called app. 'class App extens Component {
// a constructor is basically something that is defined that has a bunch of functions on it
// and prototypes. usually they start with 'const today = new Date()'


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
