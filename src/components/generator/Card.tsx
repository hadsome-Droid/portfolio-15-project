import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";

type GeneratorPropsType = {
    src: string
    text: string
}
export const Card = (props: GeneratorPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper direction={'column'}>
                <img src={props.src} alt={props.src}/>
                <p>{props.text}</p>
                <FlexWrapper>
                    <a href="">Edit for you</a>
                    <a href="">see preview</a>
                </FlexWrapper>
            </FlexWrapper>
        </StyledCard>

    );
};

const StyledCard = styled.div`
  max-width: 270px;
  flex: 0 1 50%;
  background-color: #353535;
  
  border-radius: 26px;
  border: 1px solid red;
  overflow: hidden;

  img {
    max-height: 240px;
    object-fit: cover;
  }
`