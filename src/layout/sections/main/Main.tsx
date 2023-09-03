import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import MainPhoto from '../../../assets/images/projects/photo.webp'
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import Plays from "../../../assets/images/+.svg"
import Ellipse from "../../../assets/images/Ellipse.svg"

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
                                    <MainLink href="">
                                        See Projects
                                        <Icon iconId={'arrow-right'}
                                              viewBox={'-14 -12 50 50'}/>
                                    </MainLink>
                                </li>

                                <li>
                                    <MainLink href="">
                                        Download Resume
                                        <Icon iconId={'arrow-right'}
                                              viewBox={'-14 -12 50 50'}/>
                                    </MainLink>
                                </li>
                            </MainList>
                        </FlexWrapper>
                        <StyledBackground></StyledBackground>
                    </FlexWrapper>
                </MainBlock>
            </Container>
        </StyledMain>
    );
};

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(0, 66, 255, 0.05);
  backdrop-filter: blur(10px);
  outline: 1px solid #414140;
  border-radius: 200px 0;
  z-index: -1;

`
const StyledMain = styled.section`
  min-height: 100vh;

  ${Container} {
    padding-top: 190px;
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      width: 468px;
      height: 946px;
      background: #24335C;
      top: 0;
      position: absolute;
      z-index: -1;
    }
  }

`
const MainBlock = styled.div`
  max-height: 507px;
  max-width: 1108px;
  margin: 0 auto;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 88px;
    height: 88px;
    background-image: url(${Plays});
    position: absolute;
    top: -88px;
    left: 326px;
    z-index: -2;
  }

  &::after {
    content: '';
    width: 152px;
    height: 152px;
    background-image: url(${Ellipse});
    background-size: cover;
    position: absolute;
    bottom: -7px;
    right: -1px;
    z-index: -2;
  }
`

const MainTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 136%;
  padding: 64px 0 19px 0;

  span {
    color: ${theme.colors.dark.accent};
    margin-right: 100px;
  }
`
const MainInfo = styled.p`
  max-width: 376px;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  padding-bottom: 49px;
`
const MainList = styled.ul`
  display: flex;
  gap: 32px;
  margin-bottom: 74px;

`
const PhotoWrapper = styled.div`
  max-width: 400px;
  max-height: 400px;
  margin-left: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 20px solid white;
  }
`
const MainLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 54px;
  position: relative;
  z-index: 0;

  svg {
    opacity: 0;
  }

  &:hover {
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: ${theme.colors.dark.accent};
      border-radius: 20px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }

    svg {
      opacity: 1;
    }
  }


`