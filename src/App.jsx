import { Button } from 'react-bootstrap'
import './App.css'
import Navbar from './components/navbar'
import ItemListContainer from './itemListConteiner/itemListContainer'



function App() {

  return (
    <div>
        <Navbar/>
      <ItemListContainer greeting='Bienvenido/a a mi Tienda'/>
    </div>
  )
}

export default App