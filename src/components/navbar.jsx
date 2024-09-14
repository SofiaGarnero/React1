import React from "react";
import Button from 'react-bootstrap/Button';
import CartwidgetA from "./cardwidget";



export const Navbar = () => {
    return (
        <div>
             <nav className="Navbar1">
                <h1>Natura Cosmeticos</h1>
                <ul>
                    {/* <li><a href="#"></a><Button variant="outline-light">Tienda</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" >Quienes somos</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" >Contacto</Button></li> */}
                    <button><li>Inicio</li></button>
                    <button><li>Quienes Somos</li></button>
                    <button> <li>Contacto</li></button>
                </ul>
                <CartwidgetA/>
            </nav> 
            
        </div>
    );
}

export default Navbar;