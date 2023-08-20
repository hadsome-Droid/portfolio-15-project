import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";

type GeneratorPropsType = {
    src: string
    text: string
}
export const Generator = (props: GeneratorPropsType) => {
    return (
        <StyledGenerator>
            <FlexWrapper direction={'column'}>
                <img src={props.src} alt={props.src}/>
                <p>{props.text}</p>
                <FlexWrapper>
                    <a href="">Edit for you</a>
                    <a href="">see preview</a>
                </FlexWrapper>
            </FlexWrapper>
        </StyledGenerator>

    );
};

const StyledGenerator = styled.div`
  max-height: 394px;
  max-width: 270px;
  flex: 0 1 50%;
`