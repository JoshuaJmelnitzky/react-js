import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import Navbar from './components/Navbar/NavbarBs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailCointainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import CarouselIndex from './components/Carousel/CarouselIndex';
import Products from './components/Products/Products';
import Account from './components/Account/Account';
import Help from './components/Help/Help';
import Checkout from './components/Cart/Checkout/Checkout';

const App = () => {
    return ( 
        <CartContextProvider>
            <BrowserRouter>
                <div className = 'hardbuy' >
                    <Navbar/>

                    <Routes>
                        <Route exact path='/' element={<CarouselIndex />}/>

                        <Route exact path='/category/:idCategory' element={<ItemListContainer/>}/>

                        <Route exact path='/products' element={<Products/>}/>

                        <Route exact path='/account' element={<Account/>}/>

                        <Route exact path='/ItemDetail/:idDetail' element={<ItemDetailContainer/>}/>

                        <Route exact path='/help/' element={<Help/>}/>

                        <Route exact path='/checkout' element={<Checkout/>}/>
                        
                        <Route exact path='/cart' element={<Cart/>}/>


                    </Routes>
                </div>
            </BrowserRouter>
            <Footer/>
        </CartContextProvider>
    )
}

export default App;
