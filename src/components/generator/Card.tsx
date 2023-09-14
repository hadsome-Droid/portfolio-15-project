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
                <ImageWrapper>
                    <img src={props.src} alt={props.src}/>
                </ImageWrapper>
                <CardText>{props.text}</CardText>
                <FlexWrapper gap={'30px'} content={'center'}>
                    <CardLink href="">Edit for you</CardLink>
                    <CardLink href="">see preview</CardLink>
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
  
`
const ImageWrapper = styled.div`
  max-height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`
const CardText = styled.p`
  max-width: 204px;
  margin: 0 auto;
  font-family: Kalameh, sans-serif;
  font-size: 20px;
  font-weight: 700;
  padding: 17px 0;
`
const CardLink = styled.a`
  padding-top: 12px;
  margin-bottom: 27px;
`