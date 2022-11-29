import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Home from "./components/Item";
import Itemlistcontainer from "./containers/Itemlistcontainer";
import Footer from "./components/Footer";
const App = () =>{
  return (
    <>
    <Header  />
    <Itemlistcontainer/>
    <Footer/>
    </>
  )
}

export default App;