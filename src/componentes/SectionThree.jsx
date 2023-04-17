import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Section = styled.section`
width:100%;
height:800px;
background:white;
display:flex;
gap:5px;
justify-content: space-evenly;
align-items: center;
`
const Card = styled.div`
width: 210px;
height: 550px;
background: #00FFA0;
padding: 1rem;
border-radius: 1rem;
border: .5vmin solid #05060f;
box-shadow: .4rem .4rem #05060f;
overflow: hidden;
`
const PricingBlockContent = styled.div`
display: flex;
height: 100%;
flex-direction: column;
gap: .5rem;
`
const PricingPlan = styled.p`
color: #05060f;
font-size: 1.3rem;
line-height: 1.25;
font-weight: 700;
`
const PriceValue = styled.div`
display: flex;
color: #05060f;
font-size: 1.8rem;
line-height: 1.25;
font-weight: 700;
`
const PriceNumber = styled.p`
color:white;
`
const PriceInteger = styled.span`
color:white;
`
const PriceDiscount = styled.div`
color:black;
`
const PricingNote = styled.div`
opacity: .8;
color:white;
`
const CheckList = styled.ul`
display: flex;
flex-direction: column;
gap: .2rem;
margin-top: .5rem;
`
const CheckListItem = styled.li`
display: flex;
align-items: center;
gap: 4px;
`
const Button = styled.button`
font-family: monospace;
font-size: 1.5rem;
color: #FAFAFA;
text-transform: uppercase;
padding: 10px 20px;
border-radius: 10px;
border: 2px solid black;
background:#00FFA0;
box-shadow: 3px 3px black;
cursor: pointer;
margin: 35px 0;
&active{
 box-shadow: none;
transform: translate(3px, 3px);
}
`


const SectionThree = () => {
    return (
        <Section>
            <Card>
                <PricingBlockContent>
                    <PricingPlan>Plan Basico</PricingPlan>
                    <PriceValue data-currency="$ USD" data-currency-simple="USD">
                        <PriceNumber>$<PriceInteger>5.99</PriceInteger></PriceNumber>
                        <PriceDiscount>/mes</PriceDiscount>
                    </PriceValue>
                    <PricingNote>😎Ahorra Al Maximo</PricingNote>
                    <CheckList>
                        <CheckListItem>500 Mensajes Gratis</CheckListItem>
                        <CheckListItem>500 Mb De Internet</CheckListItem>
                        <CheckListItem>100 Minutos De Llamadas Gratis</CheckListItem>
                        <CheckListItem>Descuento En Nuestra Tienda</CheckListItem>
                    </CheckList>
                    <Button>Comprar</Button>
                </PricingBlockContent></Card>
                <Card>
                <PricingBlockContent>
                    <PricingPlan>Plan GraPhone</PricingPlan>
                    <PriceValue data-currency="$ USD" data-currency-simple="USD">
                        <PriceNumber>$<PriceInteger>9.99</PriceInteger></PriceNumber>
                        <PriceDiscount>/mes</PriceDiscount>
                    </PriceValue>
                    <PricingNote>👌Mas Popular</PricingNote>
                    <CheckList>
                        <CheckListItem>1000 Mensajes Gratis</CheckListItem>
                        <CheckListItem>3 GB de Internet</CheckListItem>
                        <CheckListItem>Llamadas Gratis</CheckListItem>
                        <CheckListItem>30% de descuento en varios productos de nuestra tienda</CheckListItem>
                    </CheckList>
                    <Button>Comprar</Button>
                </PricingBlockContent></Card>
                <Card>
                <PricingBlockContent>
                    <PricingPlan>Plan Viajero</PricingPlan>
                    <PriceValue data-currency="$ USD" data-currency-simple="USD">
                        <PriceNumber>$<PriceInteger>15.99</PriceInteger></PriceNumber>
                        <PriceDiscount>/mes</PriceDiscount>
                    </PriceValue>
                    <PricingNote>😊Nosotros te conectamos</PricingNote>
                    <CheckList>
                        <CheckListItem>Mensajes Gratis</CheckListItem>
                        <CheckListItem>5 GB de Internet En El Mundo</CheckListItem>
                        <CheckListItem>Llamadas Internacionales GRATIS</CheckListItem>
                        <CheckListItem>1 GB de redes gratis</CheckListItem>
                    </CheckList>
                    <Button>Comprar</Button>
                </PricingBlockContent></Card>
                <Card>
                <PricingBlockContent>
                    <PricingPlan>Plan Anual</PricingPlan>
                    <PriceValue data-currency="$ USD" data-currency-simple="USD">
                        <PriceNumber>$<PriceInteger>50.99</PriceInteger></PriceNumber>
                        <PriceDiscount>/Año</PriceDiscount>
                    </PriceValue>
                    <PricingNote>😜Tu Mejor Año</PricingNote>
                    <CheckList>
                        <CheckListItem>Mensajes Gratis y Whatsapp Gratis</CheckListItem>
                        <CheckListItem>3 GB de Internet Todos Los Meses</CheckListItem>
                        <CheckListItem>Llamadas Gratis</CheckListItem>
                        <CheckListItem>40% Off es nuestros productos</CheckListItem>
                    </CheckList>
                    <Button>Comprar</Button>
                </PricingBlockContent></Card>
        </Section>
    )
}

export default SectionThree