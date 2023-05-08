import React, { useState } from "react";
import styled from 'styled-components';
import { CardsPhone } from "../data";
import './stylado.css'


const Card = styled.div`
  position: relative;
  width: 11.875em;
  height: 16.5em;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 120ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0.5em;
  padding-bottom: 3.4em;

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
const Section = styled.section`
width:100%;
background:#bdbffa;
height:800px;
display: grid;
grid-template-columns: 300px 300px;
grid-template-rows: 300px 300px;
justify-items: center;
align-items: center;
justify-content: center;

`

const CardComponent = () => {
    const [selected, setSelected] = useState(null);
    const filteredData = CardsPhone.filter((item) => {
      if (selected === null) return false;
      return item.marca === selected;
    });
  
    const handleClick = (marca) => {
      if (marca === selected) {
        setSelected(null);
      } else {
        setSelected(marca);
      }
    };
  
    return (
      <div>
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
              <Title>Huaweii</Title>
            </FlipCardFront>
            <FlipCardBack onClick={() => handleClick("iPhone")}>
              <Title>Comprar</Title>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </FlipCardContainer>
    </Section>
    

        {selected !== null && (
          <div>
            <div className="card-container">
              {filteredData.map((item) => (
                     <Card>
                     <img src={item.img} alt={item.name} />
                       <Text></Text>
                     <Title2>{item.name}</Title2>
                     <Price>$ {item.price} U$D</Price>
                   </Card>))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default CardComponent;

