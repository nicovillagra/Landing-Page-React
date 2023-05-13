import { useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Menu from './componentes/menu';
import Header from './componentes/header';
import SectionTwo from './componentes/SectionTwo';
import SectioFour from './componentes/SectioFour';
import Modal from './componentes/Modal';
import SectionFive from './componentes/SectionFive';
import CardComponent from './componentes/FilterModal';
import SectionThree from './componentes/SectionThree';
import VideoComponent from './componentes/video';

function App() {
  const [allProducts,setAllProducts] = useState([])
  const [Total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)
  return (
    <>
    <ChakraProvider>
    <Menu
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={Total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts}
    />
    <Header/>
    <SectionTwo/>
    <SectionThree 
    allProducts={allProducts} setAllProducts={setAllProducts}
    total={Total} setTotal={setTotal}
    countProducts={countProducts} setCountProducts={setCountProducts}
    />
    <CardComponent
            allProducts={allProducts} setAllProducts={setAllProducts}
            total={Total} setTotal={setTotal}
            countProducts={countProducts} setCountProducts={setCountProducts}
    />
    </ChakraProvider>
    </>
  );
}

export default App;
