import React, { useState } from "react";
import styled from 'styled-components';
import { CardsPhone } from "../data";
import './stylado.css'


const Card = styled.div`
  position: relative;
  width:200px;
  height:300px;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 120ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0.5em;
  padding-bottom: 3.4em;
  flex-direction: column;

  &:after {
    content: "Add to Cart";
    padding-top: 1.25em;
    padding-left: 1.25em;
    position: absolute;
    left: 0;
    bottom: -60px;
    background: #00AC7C;
    color: #fff;
    height: 2.5em;
    width: 90%;
    transition: all 80ms;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0;
  }

  &:hover:after {
    bottom: 0;
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }

  &:active:after {
    content: "Added !";
    height: 3.125em;
  }
  @media (max-width: 768px) {
    width: 167px;
    height: 238px;
  }
  
`;
const CardImage = styled.div`
width: 100%;
height: 100%;
display: grid;
place-items: center;
background-image: url(${props => props.imageSrc || ''});
`;
const Button = styled.button`
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }

  &:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`;
const Image = styled.div`
  background: rgb(241, 241, 241);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Text = styled.span`
  max-width: 55px;
`;

const Title2 = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  position: absolute;
  left: 0.625em;
  bottom: 1.875em;
  font-weight: 400;
  color: #000;
`;

const Price = styled.span`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 0.9em;
  position: absolute;
  left: 0.625em;
  bottom: 0.625em;
  color: #000;
`;
const FlipCard = styled.div`
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
  @media (max-width: 768px) {
    width: 171px;
    height: 229px;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const FlipCardFront = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
    rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
  z-index:1;
`;

const FlipCardBack = styled.button`
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
    bisque 40%, rgb(255, 185, 160) 78%);
  color: white;
  transform: rotateY(180deg);
  align-items: center;
`;

const FlipCardContainer = styled.div`
  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;
const Section = styled.div`
width:100%;
background:#a7ecd6;
height:300px;
gap:60px;
display:flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  justify-items: center;
  height:500px;
}

`
const SectionContainer = styled.section`
width:100%;
background:#a7ecd6;
height:800px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
  justify-content: normal;
  gap:30px;
}
`
const CardContainer = styled.div`
width:100%;
height:600px;
display:flex;
background:#a7ecd6;
gap:30px;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height:740px;
}

`
const Title3 = styled.h1`
color:black;
font-family:font3;
font-size:40px;
@media (max-width: 768px) {
  text-align:center;
}
`

const CardComponent = ({allProducts, setAllProducts,countProducts,setCountProducts,total,setTotal}) => {
  const [selected, setSelected] = useState(null);
  const filteredData = CardsPhone.filter((item) => {
    if (selected === null) return false;
    return item.marca === selected;
  });
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

  const handleClick = (marca) => {
    if (marca === selected) {
      setSelected(null);
    } else {
      setSelected(marca);
    }
  };

  return (
    <SectionContainer>
      <Title3>Elige tu marca favorita</Title3>
      <Section>
        <FlipCardContainer>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Title>Apple</Title>
              </FlipCardFront>
              <FlipCardBack onClick={() => handleClick("iPhone")}>
                <Title>Comprar</Title>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </FlipCardContainer>


        <FlipCardContainer>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Title>Samsung</Title>
              </FlipCardFront>
              <FlipCardBack onClick={() => handleClick("Samsung")}>
                <Title>Comprar</Title>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </FlipCardContainer>

        <FlipCardContainer>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Title>Motorola</Title>
              </FlipCardFront>
              <FlipCardBack onClick={() => handleClick("Motorola")}>
                <Title>Comprar</Title>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </FlipCardContainer>

        <FlipCardContainer>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Title>Huaweii</Title>
              </FlipCardFront>
              <FlipCardBack onClick={() => handleClick("Huawei")}>
                <Title>Comprar</Title>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </FlipCardContainer>
      </Section>


      {selected !== null && (
          <CardContainer>
            {filteredData.map((product) => (
              <Card>
                <div id="PhoneModal" className={'PhoneimgModal'+ product.id}>
                  <Text></Text>
                </div>
                <Title2>{product.name}</Title2>
                <Price>$ {product.price} U$D</Price>
                <Button onClick={() => onAddProducts(product)}>Comprar</Button>
              </Card>
              ))}
          </CardContainer>
      )}
    </SectionContainer>
  );
};

export default CardComponent;

