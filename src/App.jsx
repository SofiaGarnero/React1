
import './App.css'
import Navbar from './components/navbar'
import ItemListContainer from './itemListConteiner/itemListContainer'
import Button from 'react-bootstrap/Button';


function App() {

  return (
    <div>
      
        <Navbar/>
      <ItemListContainer greeting='Bienvenido/a a mi Tienda'/>
    </div>
  )
}

export default App