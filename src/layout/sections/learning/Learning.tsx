import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

const learnItems = ['After Effects & Photoshop', 'Website , Html & cSS',]

export const Learning = () => {
    return (
        <StyledLearning>
            <Container>
                <FlexWrapper content={'center'} items={'center'}>
                    <Title textTitle={'Learning'}/>
                </FlexWrapper>

                {learnItems.map((item)=> {
                    return (
                        <LearnBlock>
                            <NameTechnology>{item}</NameTechnology>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </LearnBlock>
                    )
                })}
            </Container>

        </StyledLearning>
    );
};

const StyledLearning = styled.section`
  background-color: ${theme.colors.dark.secondaryBg};
  
  
  ${Container}{
    padding-top: 62px;
    padding-bottom: 96px;
  }
  

  ul {
    display: flex;
    justify-content: right;
    padding-right: 9px;
    gap: 12px;
  }

  li {
    display: block;
    width: 330px;
    height: 192px;
    background: #D9D9D9;
    border-radius: 9px;
  }
`
const LearnBlock = styled.div`
  padding-top: 51px;
`
const  NameTechnology = styled.h3`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 10px;
  padding-left: 78px;
`