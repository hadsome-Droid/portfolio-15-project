import React from 'react';
import styled from "styled-components";
import Map from '../../../assets/images/projects/map-about.webp'
import PhotoAbout from '../../../assets/images/projects/photo-about.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import EllipseGradient from "../../../assets/images/EllipseGradient.svg"

const listItem = ['I was born in Iran-Mashhad',
    'I’m 20 years old',
    'I have started my interest in this field from 2019',
    'I’m designer , video editor , web developer and ...',
    'My phone number in Iran +989212073348',]

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <AboutInfo>
                        <FlexWrapper content={'end'}>
                            <a href=""><Icon iconId={'wa-white'} viewBox={'20 20 83 83'}/></a>
                            <a href=""><Icon iconId={'instagram'} viewBox={'-1 0 47 47'}/></a>
                            <a href=""><Icon iconId={'arrow-top'}/></a>
                        </FlexWrapper>
                        <FlexWrapper direction={'column'}>
                            <StyledAboutTitle>I’m <span>Alireza</span>
                                Kavousy nezjad</StyledAboutTitle>
                            <AboutList>

                                {listItem.map((listElem)=> {
                                    return(
                                        <AboutListItem>{listElem}</AboutListItem>
                                    )
                                })}
                            </AboutList>
                        </FlexWrapper>
                </AboutInfo>
                <WrapperImage>
                    {/*<MapImage src={Map} alt="#"/>*/}
                    <PhotoImage src={PhotoAbout} alt="#"/>
                </WrapperImage>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  //min-height: 946px;
  

  ${Container} {
    display: flex;
    justify-content: end;
    align-items: end;
    position: relative;
    height: 100%;
    background-color: #A6BCFA;
    
    z-index: 0;

    &:before{
      content: '';
      position: absolute;
      display: inline-block;
      width: 800px;
      height: 100%;
      background-image: url(${Map});
      background-repeat: no-repeat;
      background-size: contain;
      top: 83px;
      left: 119px;
      z-index: -1;
    }

  }
`
const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 491px;
  border-radius: 100px 0;
  border: 2px solid #FFF;
  position: relative;
  margin-bottom: 56px;
  margin-left: 10px;
  overflow: hidden;
  padding-left: 30px;
  
  z-index: 0;

  & div:first-child{
    width: 100%;
    padding-top: 30px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
  }

`

const WrapperImage = styled.div`
  width: 800px;
  overflow: hidden;



  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
// const MapImage = styled.img`
//   //position: absolute;
// `
const PhotoImage = styled.img`

`

const StyledAboutTitle = styled.h2`
  display: inline-block;
  max-width: 463px;
  color: #393939;
  font-size: 60px;
  font-weight: 700;
  
`
const AboutList = styled.ul`
 //list-style-image: ${EllipseGradient};
  
`
const AboutListItem = styled.li`
  color: #393939;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  margin: 0 auto;
  
  &:before{
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%), #D9D9D9;
    margin-right: 13px;
  ;
  }
  
`