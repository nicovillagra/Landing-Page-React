import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Menu from './componentes/menu';
import Header from './componentes/header';
import SectionTwo from './componentes/SectionTwo';
import SectioFour from './componentes/SectioFour';

function App() {
  return (
    <>
    <ChakraProvider>
    <Menu/>
    <Header/>
    <SectionTwo/>
    <SectioFour/>
    </ChakraProvider>
    </>
  );
}

export default App;
