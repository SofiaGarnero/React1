import React from "react";
import Cartwidget from "./cardw";
import Button from 'react-bootstrap/Button';


export const Navbar = () => {
    return(
        <div>
<nav className="Navbar1">
    <h1>Natura Cosmeticos</h1>
    <ul>
        {/* 
        <li><a href="#"></a><Button variant="outline-light">Tienda</Button></li>
        <li><a href="#"></a><Button variant="outline-light" >Quienes somos</Button></li>
        <li><a href="#"></a><Button variant="outline-light" >Contacto</Button></li> */}
        
        <li><button variant="outline-light" >Inicio</button></li>
        <li><button variant="outline-light" >Tienda</button></li>
        <li><button variant="outline-light" >Quienes somos</button></li>
        <li><button variant="outline-light" > Contacto</button></li>
        
        <Cartwidget/>

    </ul>
</nav>
</div>
    );
}

export default Navbar;