import Header from "./components/Header";
// import './App.css'
import Itemlistcontainer from "./containers/Itemlistcontainer";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/cart";
import CartContextProvider from "./components/context/CartContext";
const App = () =>{
  return (
    
    <CartContextProvider>

    <BrowserRouter>
      <Header  />
        <Routes>
          <Route path="/"element={<Itemlistcontainer/>}/>
          <Route path="/categoria/:categoriaId" element={<Itemlistcontainer/>}/>
          <Route path="/item/:idProducto" element={<ItemDetailContainer/>}/> 
          <Route path="/carrito" element={<Cart/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>

    </CartContextProvider>
    
  );
}

export default App;