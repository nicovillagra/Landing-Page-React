import React from 'react'
import './assets/sectionfive.css'
import styled from 'styled-components';

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

const FlipCardBack = styled.div`
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

const SectionFive = () => {
  return (
    <Section>
      <FlipCardContainer>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <Title>Apple</Title>
            </FlipCardFront>
            <FlipCardBack>
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
            <FlipCardBack>
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
            <FlipCardBack>
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
            <FlipCardBack>
              <Title>Comprar</Title>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </FlipCardContainer>
    </Section>
    

  )
}

export default SectionFive