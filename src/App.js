import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menspage from "./Pages/Menspage"
import Womenspage from './Pages/Womenspage';
import Home from './Pages/Home'
// import Mens from './Pages/Mens';
import Cart from './Pages/Cart';
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
// import Navbar from './Pages /Navbar';
import Juniorspage from './Pages/Juniorspage';
import Summersale from './Pages/Summersale';
import Summercollection from './Pages/Summercollection';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Mens' element={<Menspage />}></Route>
        <Route path='/Womens' element={<Womenspage />}></Route>
        <Route path='/Juniors' element={<Juniorspage />}></Route>
        <Route path='/SummerCollection' element={<Summersale />}></Route>
        <Route path="SummerSale" element={< Summercollection />} />
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
