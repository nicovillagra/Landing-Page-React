import React, { useState } from 'react'
import './stylado.css'
import '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './header';

const HeaderStyle = styled.header`
height:100px;
width:100%;
backgroundColor:#00000000;
display:flex;
alignItems:center;
padding:10px;
position:fixed;
justify-content: space-between;
z-index:1000;
padding:10px;
align-items: center;
@media (max-width: 768px) {
  bottom:0;
  justify-content: space-around;
  background:rgba(0, 0, 0, 0.205);
}
`;
const Card = styled.div`
width: 100%;
max-width: 290px;
height: 70px;
background: #353535;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: left;
backdrop-filter: blur(10px);
transition: 0.5s ease-in-out;
z-index:40;
`
const Img = styled.div`
width: 50px;
height: 50px;
margin-left: 10px;
border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TextBox = styled.div`
width: calc(100% - 90px);
margin-left: 10px;
color: white;
font-family: 'Poppins' sans-serif;
`
const textContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const H1 = styled.p`
font-size: 16px;
font-weight: bold;
`
const Span = styled.span`
font-size: 15px;
`
const P = styled.p`
  font-size: 12px;
  font-weight: lighter;
`
const ProductContainer = styled.div`
width:300px;
height:500px;
position: fixed;
margin-top: 75px;
margin-left: -70px;
background-color:black;
`
const Nav = styled.nav`
background-color:rgba(0, 0, 0, 0.205);
width:100%;
height: auto;
position: fixed;
left: 0;
margin: auto;
top: 95px;
@media (max-width: 768px) {
  bottom:100px;
  left: 0;
  top:0;
  margin: auto;
  backdrop-filter: blur(8px);
}
`
const Ul = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
`
const Li = styled.li`
padding: 10px;
color: white;
`
const CartNoneText=styled.p`
color:white;
font-family:font4;
font-size:30px;
text-aling:center;

`
const CountProducts = styled.div`
	position: absolute;
	top: 55%;
  background-color: #000;
	color: #fff;
	width: 25px;
	height: 25px;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
`
const BtnDelete = styled.button`
font-family:font4;
font-size:26px;
width:200px;
color:white;
background:red;
border-radius:10px;
`
const CartAndBars = styled.div`
display:flex;
gap:30px;
@media (max-width: 768px) {
  gap:90px;
}
`


const Menu = ({ allProducts, setAllProducts, total,countProducts, setCountProducts,setTotal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setActive(false)
  };
  const openCart = () =>{
    setActive(!active);
    setIsOpen(false)

  }
  const onDeleteProduct = (product) =>{

    const results = allProducts.filter(item => item.id !== product.id);
    setCountProducts(countProducts - product.quantity)
    setTotal(total - product.price * product.quantity)
    setAllProducts(results)
  }
  const onCleanCart = () =>{
    setAllProducts([])
    setTotal(0)
    setCountProducts(0)
  }
  return (
    <HeaderStyle>
      <div className='logo'></div>
      <CartAndBars>
        <div>
        <CountProducts>
          <span style={{fontSize:'12px'}}>{countProducts}</span>
        </CountProducts>
        <button onClick={openCart}>
          <FontAwesomeIcon icon={faShoppingCart} size='3x' color='white' />
        </button>
        </div>
        <button onClick={handleToggle}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size='3x' color='white' />
        </button>
        <div className={`product-container ${active ? '' : 'hidden'}`}>
          {
            allProducts.length ? (
              <>
                
                  {allProducts.map(product => (
                  
                  <Card key={product.id}>
                  <Img><div id="PhoneModal" className={'PhoneimgModal'+ product.id} ></div></Img>
                  <TextBox>
                    <textContent>
                      <H1>{product.name}</H1>
                      <Span>${product.price}</Span>
                    </textContent>
                    <P>{product.quantity}</P>
                    <div>
                    </div></TextBox>
                    <FontAwesomeIcon icon={faTrash} color='red' size='x3' onClick={() => onDeleteProduct(product)} />

                    </Card>
                    
                  ))}
                  <div className='divisor'></div>
                  <span className='Total-product'>Total : {total.toFixed(2)}</span>
                  <BtnDelete onClick={onCleanCart}>Vaciar Carrito</BtnDelete>
                
              </>
            ) : (
              <CartNoneText>carrito vacio</CartNoneText>
            )
          }

        </div>
        {isOpen && (
          <Nav>
            <Ul>
              <Li><Link to="/">Inicio</Link></Li>
              <Li><Link to="/login">Login</Link></Li>
              <Li><Link to="/registro">Registrarse</Link></Li>
            </Ul>
          </Nav>
        )}
      </CartAndBars>
    </HeaderStyle>
  );
}

export default Menu;