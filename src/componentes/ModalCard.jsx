import React from 'react'
import styled from 'styled-components';
import { CardsPhone } from '../data';



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

const Title = styled.span`
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
const ModalCard = () => {
  const filteredCards = CardsPhone.filter(card => card.marca.includes('iPhone'));
  return (
    <div>
      {filteredCards.map(card => (
      <Card key={card.id}>
      <div className='PhoneimgModal' style={{ backgroundImage: `url(${card.img})no-repeat center/cover` }}>
        <Text></Text>
      </div>
      <Title>{card.name}</Title>
      <Price>$ {card.price} USD</Price>
    </Card>
      ))}
    </div>
  )
}

export default ModalCard