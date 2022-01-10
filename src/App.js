import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/NavbarBs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailCointainer/ItemDetailContainer';



const App = () => {
    return ( <
        div className = 'hardbuy' >
            <Navbar/>
            <ItemListContainer greeting='Bienvenidos a HardBuy - Tienda de hardware'/>
            <ItemDetailContainer/>
        </div>
    )
}

export default App;