import React from 'react'
import styled from 'styled-components'
import './stylado.css'

const SectioStyle = styled.section`
height:800px;
width:100%;
background:#bdbffa;
`
const HStyle = styled.h1`
font-family='fuente1',sans-serif;
font-size:100px;
@media (max-width: 768px) {
    font-size:70px;
  }
`
const Div = styled.div`
height: 800px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
`
const Button = styled.button`
width: 159px;
height: 46px;
border-radius: 14px;
background:#AB6A1B;
`
const BuyNow = styled.a`
color:white;
`
const Price = styled.span`
font-family='font4';
font-size:36px;
`
const PriceNumber = styled.span`
font-family:'font3';
font-size:95px;
`
const PriceContainer = styled.div`
width: 300px;
height: 440px;
display: flex;
flex-direction: column;
@media (max-width: 768px) {
    height: 290px;
  }
`
const OfferContainer = styled.div`
width: 100%;
height: 399px;
display: flex;
align-items: center;
justify-content: flex-end;
`
const SectionTwo = () => {
    return (

        <SectioStyle>
            <Div>
                <HStyle>Cambia Tu Samsung</HStyle>
                <Button><BuyNow src="./menu.jsx">Comprar Ahora</BuyNow></Button>
                <OfferContainer>
                <div className='PhoneImg'></div>
                    <PriceContainer>
                        <Price>con un</Price>
                        <PriceNumber>50%</PriceNumber>
                        <Price>de descuento</Price>
                    </PriceContainer>
                </OfferContainer>
            </Div>
        </SectioStyle>

    )
}

export default SectionTwo