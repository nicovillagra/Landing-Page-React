import React from 'react'
import styled from 'styled-components'
import imagen from './assets/Motorola1.jpg'

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
`
const Img = styled.div`
width: 50px;
height: 50px;
margin-left: 10px;
border-radius: 10px;
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
font-size: 10px;
`
const P = styled.p`
    font-size: 12px;
    font-weight: lighter;
`
const Modal = () => {
  return (
<Card>
  <Img><img src={imagen} alt="" style={{width:'100%',height:'100%'}} /></Img>
  <TextBox>
    <textContent>
      <H1>Clans of Clash</H1>
      <Span>12 min ago</Span>
    </textContent>
    <P>Xhattmahs is not attacking your base!</P>
  <div>
</div></TextBox></Card>
  )
}

export default Modal