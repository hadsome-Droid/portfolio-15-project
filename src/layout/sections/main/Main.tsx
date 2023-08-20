import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import MainPhoto from '../../../assets/images/projects/photo.webp'
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <MainBlock>
                <FlexWrapper>
                    <PhotoWrapper>
                        <img src={MainPhoto} alt="mainPhoto"/>
                    </PhotoWrapper>
                    <FlexWrapper direction={'column'}>
                        <MainTitle>I’m Alireza
                            Kavousy nezjad</MainTitle>
                        <MainInfo>Draft is a revolutionary mobile app built to help you manage your business easily and
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
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background: #222;
`
const MainBlock = styled.div`
  max-height: 507px;
  max-width: 1108px;
  background-image: linear-gradient(#4747474D, #838383), linear-gradient(#39393980, #0042FF0D);
  color: #FFF;
`

const MainTitle = styled.h1`

`
const MainInfo = styled.p`

`
const MainList = styled.ul`
  display: flex;
`
const PhotoWrapper = styled.div`
  max-width: 400px;
  max-height: 400px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`