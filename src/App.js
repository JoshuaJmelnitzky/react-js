import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/NavbarBs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailCointainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



const App = () => {
    return ( 
        <BrowserRouter>
            <div className = 'hardbuy' >
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a HardBuy - Tienda de hardware'/>}/>
                    <Route exact path='/category/:idCategory' element={<ItemListContainer greeting='Bienvenidos a HardBuy - Tienda de hardware'/>}/>

                    <Route exact path='/ItemDetail/:idDetail' element={<ItemDetailContainer/>}/>
                    <Route exact path='/cart' element={<Cart/>}/>
                </Routes>
          
            </div>
        </BrowserRouter>
    )
}

export default App;
