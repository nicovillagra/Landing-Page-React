import React, { useState } from 'react'
import './stylado.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const HeaderStyle = styled.header`
  height:100px;
  width:100%;
  backgroundColor:#00000000;
  display:flex;
  alignItems:center;
  padding:10px;
  position:fixed;
  justify-content: space-between;
`;
const ProductContainer = styled.div `
width:300px;
height:500px;
position: fixed;
margin-top: 75px;
margin-left: -70px;
background-color:black;
`
const Nav = styled.nav`
background-color:black;
width:100%;
height: auto;
position: fixed;
margin-top: 25px;
margin-left: -1233px;
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
const [isCartOpen, setIsCartOpen] = useState(false);
const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
};
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyle>
      <div className='logo'></div>
      <div style={{display:'flex', gap:'30px'}}>
        <button onClick={toggleCart}>
        <FontAwesomeIcon icon={faShoppingCart} size='3x' color='white' />
        </button>
        {isCartOpen && (
            <ProductContainer>
              
            </ProductContainer>
        )}
        <button onClick={handleToggle}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size='3x' color='white'/>
        </button>
        {isOpen && (
          <Nav>
          <Ul>
            <Li>Inicio</Li>
            <Li>Login</Li>
            <Li>registrarse</Li>
          </Ul>
          </Nav>
        )}
      </div>
    </HeaderStyle>
  );
}

export default Menu;