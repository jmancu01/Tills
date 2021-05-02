import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Banner from './components/Banner.js';
import ItemListContainer from './components/Products/ItemListContainer.js';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemDetail from './components/Products/ItemDetail';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path ='/'>
          <NavBar/>
          <Banner/>
          <ItemListContainer/>
        </Route>
        <Route exact path ='/Products'>
          <NavBar/>
          <ItemListContainer/>
          
        </Route>
        <Route exact path ='/Products/:id'>
          
          <ItemDetail/>
          
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
