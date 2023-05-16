import React from 'react'
import styled from 'styled-components'
import { data } from '../data'


const Section = styled.section`
width:100%;
height:800px;
background:#a7ecd6;
display:flex;
gap:5px;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
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
@media (max-width: 768px) {
    width: 172px;
    height: 334px;
  }
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
@media (max-width: 768px) {
    font-size:20px;
  }
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
@media (max-width: 768px) {
    display:none;
  }
`
const CheckList = styled.ul`
display: flex;
flex-direction: column;
gap: .2rem;
margin-top: .5rem;
align-items: flex-start;
@media (max-width: 768px) {
    font-size:10px;
    gap:0px;
    margin-top:0px;
  }
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
@media (max-width: 768px) {
    margin:0px;
    padding: 5px 20px;
  }
`
const ContainerPlanes = styled.div`
display:flex;
aling-item:center;
justify-content:center;
gap:40px;
@media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
`
const Title = styled.h1`
color:black;
font-family:font3;
font-size:30px;
@media (max-width: 768px) {
    text-align:center;
  }

`

const SectionThree = ({allProducts, setAllProducts,countProducts,setCountProducts,total,setTotal}) => {

    const onAddProducts = (product) =>{
        if(allProducts.find(item =>item.id === product.id)){
          const products = allProducts.map(item => item.id === product.id ? {...item, quantity:item.quantity + 1}:
            item);
            setCountProducts(countProducts + product.quantity)
            setTotal(total + product.price * product.quantity)
            return setAllProducts([...products])
    
        };
        setTotal(total + product.price * product.quantity)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts,product]);
        
    }
    console.log(allProducts)

    return (
        
        <Section>
            <Title>Los mejores planes telefonicos para vos</Title>
            <ContainerPlanes>
            {data.map(product =>(
                <Card key={product.id}>
                <PricingBlockContent>
                    <PricingPlan>{product.name}</PricingPlan>
                    <PriceValue data-currency="$ USD" data-currency-simple="USD">
                        <PriceNumber>$<PriceInteger>{product.price}</PriceInteger></PriceNumber>
                        <PriceDiscount>/mes</PriceDiscount>
                    </PriceValue>
                    <PricingNote>{product.note}</PricingNote>
                    <CheckList>
                        <CheckListItem>{product.benefitOne}</CheckListItem>
                        <CheckListItem>{product.benefitTwo}</CheckListItem>
                        <CheckListItem>{product.benefitTrhee}</CheckListItem>
                        <CheckListItem>{product.benefitFour}</CheckListItem>
                    </CheckList>
                    <Button onClick={() => onAddProducts(product)}>Comprar</Button>
                </PricingBlockContent></Card>
            ))}
            </ContainerPlanes>
        </Section>
    )
}

export default SectionThree