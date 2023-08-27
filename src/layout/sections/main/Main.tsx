import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import MainPhoto from '../../../assets/images/projects/photo.webp'
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainBlock>
                    <FlexWrapper content={'center'} items={'center'} gap={'76px'}>
                        <PhotoWrapper>
                            <img src={MainPhoto} alt="mainPhoto"/>
                        </PhotoWrapper>
                        <FlexWrapper direction={'column'}>
                            <MainTitle>I’m <span>Alireza </span>
                                Kavousy nezjad</MainTitle>
                            <MainInfo>Draft is a revolutionary mobile app built to help you manage your business easily
                                and
                                save
                                your money.</MainInfo>
                            <MainList>
                                <li>
                                    <a href="">See Projects</a>

                                </li>
                                <Icon iconId={'f'}/>
                                <li>
                                    <a href="">Download Resume</a>
                                </li>
                            </MainList>
                        </FlexWrapper>
                    </FlexWrapper>
                </MainBlock>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  position: relative;

  z-index: 0;

  &::before {
    content: '';
    width: 468px;
    height: 946px;
    background: #24335C;
    position: absolute;
    z-index: -1;
  }

  ${Container} {
    padding-top: 190px;
  }
`
const MainBlock = styled.div`
  max-height: 507px;
  max-width: 1108px;
  background: rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(4px);
  outline: 1px solid #414140;
  border-radius: 200px 0 200px 0;
  margin: 0 auto;
`

const MainTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 136%;

  span {
    color: ${theme.colors.dark.accent};
  }
`
const MainInfo = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
`
const MainList = styled.ul`
  display: flex;
`
const PhotoWrapper = styled.div`
  max-width: 400px;
  max-height: 400px;
  padding: 43px 0 41px 104px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 20px solid white;
  }
`