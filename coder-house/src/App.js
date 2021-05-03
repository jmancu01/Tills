import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Banner from './components/Banner.js';
import ItemListContainer from './components/Products/ItemListContainer.js';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemDetail from './components/Products/ItemDetail';
import AllProducts from './components/Products/AllProducts';


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
          <AllProducts/>

          
        </Route>
        <Route exact path ='/Products/:id'>
          <NavBar/>
          <ItemDetail/>
          
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
