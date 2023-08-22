import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Learning = () => {
    return (
        <StyledLearning>
            <FlexWrapper direction={'column'} content={'center'} items={'center'}>
                <Title textTitle={'Learning'}/>
            </FlexWrapper>
            <div>
                <h3>After Effects & Photoshop</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <h3>After Effects & Photoshop</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </StyledLearning>
    );
};

const StyledLearning = styled.section`
  background: #24335C;

  ul {
    display: flex;
    justify-content: right;
    gap: 5px;
  }

  li {
    display: block;
    width: 330px;
    height: 192px;
    background: #D9D9D9;
    border-radius: 9px;
  }
`
