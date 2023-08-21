import React from 'react';
import styled from "styled-components";
import Map from '../../../assets/images/projects/map-about.webp'
import PhotoAbout from '../../../assets/images/projects/photo-about.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper>
                <div>
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
                </div>
                <img src={PhotoAbout} alt=""/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  max-height: 946px;
  background-color: #A6BCFA;
  background-image: url(${Map});
  background-position: 66px, 517px, 67px, 42px;
  background-repeat: no-repeat;
  background-size: 676px, 624px;
`
const StyledAboutTitle = styled.h2`

`