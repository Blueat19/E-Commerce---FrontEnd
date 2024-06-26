
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import{BrowserRouter ,Routes,Route} from "react-router-dom"
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Footer from './components/Footer/Footer';
import men_banner from "./components/Assets/banner_mens.png"
import kids_banner from "./components/Assets/banner_kids.png"
import women_banner from "./components/Assets/banner_women.png"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path="/womens" element={<ShopCategory banner ={women_banner}category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner ={kids_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
