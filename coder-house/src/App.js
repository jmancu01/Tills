import './App.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {

  const products = [
    {
      title: 'Campera Perez',
      price: '3000',
      description: 'campera abrigada nocturna 100% algodon'
    },
    {
      title: 'Campera Nicolas',
      price: '4000',
      description: 'campera para el verano 90% fiselina y 10% algodon'
    },
    {
      title: 'Campera Juan',
      price: '5000',
      description: 'campera para todo el ano 70% fiselina y 30% algodon'
    }
  ]
    

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <ItemListContainer products = {products}/>
    </div>
  );
}

export default App;
