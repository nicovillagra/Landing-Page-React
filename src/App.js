import { useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Menu from './componentes/menu';
import Header from './componentes/header';
import SectionTwo from './componentes/SectionTwo';
import Modal from './componentes/Modal';
import CardComponent from './componentes/FilterModal';
import SectionThree from './componentes/SectionThree';

function App() {
  const [allProducts,setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)
  return (
    <>
    <ChakraProvider>
    <Menu
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts}
    />
    <Header/>
    <SectionTwo/>
    <SectionThree 
    allProducts={allProducts} setAllProducts={setAllProducts}
    total={total} setTotal={setTotal}
    countProducts={countProducts} setCountProducts={setCountProducts}
    />
    <CardComponent
            allProducts={allProducts} setAllProducts={setAllProducts}
            total={total} setTotal={setTotal}
            countProducts={countProducts} setCountProducts={setCountProducts}
    />
    </ChakraProvider>
    </>
  );
}

export default App;
