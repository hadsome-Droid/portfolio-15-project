import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import {theme} from "../../../styles/Theme";

const serviceItems = [
    {
        iconId: 'video-play',
        text: 'Video Edit Service'
    },
    {
        iconId: 'edit',
        text: 'Ui/Ux Designer'
    },
    {
        iconId: 'notebook-2',
        text: 'Website Developer'
    },

]

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <Title textTitle={'Services'}/>
                <FlexWrapper content={'center'} gap={'31px'}>

                    {serviceItems.map((s) => {
                        return (
                            <ServiceBox>
                                <IconWrapper>
                                    <Icon iconId={s.iconId} viewBox={'0 0 73 73'}/>
                                </IconWrapper>
                                <ServiceName>{s.text}</ServiceName>
                                <ServiceLink href="">View More<Icon iconId={'arrow-right'} viewBox={'-15 -18 60 60'}/></ServiceLink>
                            </ServiceBox>
                        )
                    })}

                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
  background: #222;
  ${Container} {
  padding-top: 47px;
    padding-bottom: 97px;
    
    h2{
      margin-bottom: 67px;
    }
}
`
const ServiceBox = styled.div`
  width: 334px;
  background: #2C2B2B;

  padding-top: 117px;
  padding-right: 60px;
`
const IconWrapper = styled.div`
  width: 73px;
  height: 73px;
  margin-left: 49px;
  
  svg{
    height: 100%;
    width: 100%;
  }
`
const ServiceName = styled.h3`
padding: 24px 0 31px 59px;
`

const ServiceLink = styled.a`
  display: flex;
  align-items: center;
  padding-left: 59px;
  margin-bottom: 45px;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.dark.accent};

  svg {
    fill: ${theme.colors.dark.accent};
  }
`