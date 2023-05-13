import React, { useState } from 'react'
import './stylado.css'
import '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
const Menu = ({ allProducts, setAllProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyle>
      <div className='logo'></div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <button onClick={() => setActive(!active)}>
          <FontAwesomeIcon icon={faShoppingCart} size='3x' color='white' />
        </button>
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
                    <FontAwesomeIcon icon={faTrash} color='red' size='x3' />

                    </Card>
                    
                  ))}

                
              </>
            ) : (
              <p style={{ color: 'white', fontFamily:'font4', fontSize:'25px' }}>carrito vacio</p>
            )
          }
          <div className='divisor'></div>
          <span className='Total-product'>Total : 0</span>
        </div>
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