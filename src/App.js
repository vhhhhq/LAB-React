import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList/ProductsList';
import ProductForm from './components/ProductForm/ProductForm';

function App() {
  return (
    <div className='app'>
    <ProductForm/>
    <ProductsList/>
    </div>
  );
}

export default App;
