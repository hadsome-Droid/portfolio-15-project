import React from 'react';
import styled from "styled-components";
import Map from '../../../assets/images/projects/map-about.webp'
import PhotoAbout from '../../../assets/images/projects/photo-about.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper>
                        <FlexWrapper>
                            <a href=""><Icon iconId={'wa-white'} viewBox={'2 3 87 87'}/></a>
                            <a href=""><Icon iconId={'instagram'}/></a>
                            <a href=""><Icon iconId={'arrow-top'}/></a>
                        </FlexWrapper>
                        <FlexWrapper direction={'column'}>
                            <StyledAboutTitle>I’m Alireza
                                Kavousy nezjad</StyledAboutTitle>
                            <ul>
                                <li>I was born in Iran-Mashhad</li>
                                <li>I’m 20 years old</li>
                                <li>I have started my interest in this field from 2019</li>
                                <li>I’m designer , video editor , web developer and ...</li>
                                <li>My phone number in Iran +989212073348</li>
                            </ul>
                        </FlexWrapper>
                </FlexWrapper>
                {/*<WrapperImage>*/}
                {/*    <img src={Map} alt="#"/>*/}
                {/*    <img src={PhotoAbout} alt="#"/>*/}
                {/*</WrapperImage>*/}
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  //min-height: 946px;
  

  ${Container} {
    position: relative;
    height: 946px;
    background-color: #A6BCFA;
    
    z-index: 0;

    &:before{
      content: '';
      position: absolute;
      display: inline-block;
      width: 800px;
      height: 800px;
      background-image: url(${Map});
      background-repeat: no-repeat;
      background-size: cover;
      //top: 70px;
      //left: 41px;
      z-index: -1;
    }

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-image: url(${PhotoAbout});
      background-repeat: no-repeat;
      background-size: cover;

      top: 0;
      left: 620px;
      z-index: -1;
    }
  }
`
// const WrapperImage = styled.div`
//   display: flex;
//   overflow: hidden;
//
//
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `
const StyledAboutTitle = styled.h2`

`
