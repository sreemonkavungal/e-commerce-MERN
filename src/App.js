import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductsPage';
import ProductMainPage from './Pages/ProductMainPage';
import CartPage from './Pages/CartPage';
import ContactPage from './Pages/ContactPage';
import SignInPage from './Pages/SignInPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/shop' element={<ProductPage/>}/>
  <Route path='/blog' element={<ProductMainPage/>}/>
  <Route path='/cart' element={<CartPage/>}/>
  <Route path='/contact' element={<ContactPage/>}/>
  <Route path='/signin' element={<SignInPage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/signup' element={<SignupPage/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
