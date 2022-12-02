import Header from "./components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Itemlistcontainer from "./containers/Itemlistcontainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () =>{
  return (
    <>
    <BrowserRouter>
    <Header  />
    <Routes>
      <Route path="/"element={<Itemlistcontainer/>}/>
      <Route path="/categoria/:categoriaId" element={<Itemlistcontainer/>}/>
      {/* <Route path="/datelle" element={<ItemDetailContainer/>}/>  */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;