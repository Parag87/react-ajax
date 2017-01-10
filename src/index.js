import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Box from './components/boxes/Boxes';
import Random from './components/boxes/Random';
import Currency from './components/currencyConverter/Currency';
import Movies from './components/Movies/Movies';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';

ReactDOM.render(
 <Router history={browserHistory}>
   <Route path="/" component={App}>
     <IndexRoute component={Home} />
     <Route path="about" component={About} />
     <Route path="faq" component={Faq} />
     <Route path="boxes" component={Box} />
     <Route path="random" component={Random} />
      <Route path="currency" component={Currency} />
      <Route path="movies" component={Movies} />
   </Route>
 </Router>,
 document.getElementById('root')
);
