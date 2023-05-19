import React from 'react'
import styled from 'styled-components'
import './stylado.css'

const FooterContainer = styled.footer`
width:100%;
height:200px;
display:flex;
align-items: center;
justify-content: space-around;
`
const ListContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
color:black;
font-family:font4;
`
const ListContainerOne = styled.div`
display:flex;
flex-direction: column;
align-items:center;
color:black;
font-family:font4;
@media (max-width: 600px) {
    display:none;
  }
`
const LiStyle= styled.li`
text-shadow: black 6px 3px 20px;
color:white;
`

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <ListContainerOne>
            <h3>Nosotros</h3>
            <ul>
                <LiStyle>Quienes Somos</LiStyle>
                <LiStyle>Productos</LiStyle>
                <LiStyle>Preguntas Frecuentes</LiStyle>
                <LiStyle></LiStyle>
            </ul>
        </ListContainerOne>
        <div className='Footer-Logo'></div>
        <ListContainer>
            <h3>contacto</h3>
            <ul>
                <LiStyle>Avenida Colon 381, Cordoba</LiStyle>
                <LiStyle>351 304 6606</LiStyle>
                <LiStyle>graphonecontact@gmail.com</LiStyle>
            </ul>
        </ListContainer>
    </FooterContainer>
    
    </>
  )
}

export default Footer