import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Banner from './components/Banner.js';
import CartView from './components/CartView.js'
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemDetail from './components/Products/ItemDetail';
import AllProducts from './components/Products/AllProducts';
import Footer from './components/Footer';
import CartContextProvider from './context/CartContext.js'
import Register from './components/Register';
import Exit from './components/Exit'

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <Switch>

          <Route exact path ='/'>
            <NavBar/>
            <Banner/>
            
            <Footer/>
          </Route>

          <Route exact path ='/Products'>
            <NavBar/>
            <AllProducts/>  
            <Footer/>
          </Route>

          <Route exact path ='/Products/:id'>
            <NavBar/>
            <ItemDetail/> 
            <Footer/>           
          </Route>

          <Route exact path = '/CartView'>
            <NavBar/>
            <CartView/>
            <Footer/>
          </Route>

          <Route exact path = '/Register'>
            <NavBar/>
            <Register/>
            <Footer/>
          </Route>

          <Route exact path = '/Exit'>
            <NavBar/>
            <Exit/>
            <Footer/>
          </Route>

        </Switch>
      </CartContextProvider>     
    </div>
  );
}

export default App;
