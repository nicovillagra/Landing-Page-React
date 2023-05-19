import { useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Menu from './componentes/menu';
import Header from './componentes/header';
import SectionTwo from './componentes/SectionTwo';
import Modal from './componentes/Modal';
import CardComponent from './componentes/FilterModal';
import SectionThree from './componentes/SectionThree';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Footer from './componentes/Footer';


function App() {
  const [allProducts,setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Menu
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts}
    />}>
        </Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Header/>}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<SectionTwo/>}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<SectionThree 
    allProducts={allProducts} setAllProducts={setAllProducts}
    total={total} setTotal={setTotal}
    countProducts={countProducts} setCountProducts={setCountProducts}
    />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<CardComponent
            allProducts={allProducts} setAllProducts={setAllProducts}
            total={total} setTotal={setTotal}
            countProducts={countProducts} setCountProducts={setCountProducts}
    />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Footer/>}>
      </Route>
    </Routes>
    <Routes>
      <Route path='/registro' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
