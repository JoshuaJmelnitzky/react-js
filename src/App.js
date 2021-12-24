import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/NavbarBs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
    return ( <
        div className = 'hardbuy' >
            <Navbar/>
            <ItemListContainer greeting='Bienvenidos a HardBuy - Tienda de hardware'/>
        </div>
    )
}

export default App;