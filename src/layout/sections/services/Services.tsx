import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <StyledServicesBox>
                    <FlexWrapper direction={'column'}>
                        <FlexWrapper direction={'column'} content={'center'} items={'center'}>
                            <StyledServicesTitle>Services</StyledServicesTitle>
                            <Icon iconId={'dot'}/>
                        </FlexWrapper>
                        <FlexWrapper content={'space-between'}>
                            <FlexWrapper direction={'column'}>
                                <Icon iconId={'video-play'}/>
                                <span>
                        Video Edit Service
                    </span>
                                <a href="">View More <Icon iconId={'arrow-right'}/></a>
                            </FlexWrapper>
                            <FlexWrapper direction={'column'}>
                                <Icon iconId={'edit'}/>
                                <span>
                        Ui/Ux Designer
                    </span>
                                <a href="">View More <Icon iconId={'arrow-right'}/></a>
                            </FlexWrapper>
                            <FlexWrapper direction={'column'}>
                                <Icon iconId={'notebook-2'}/>
                                <span>
                        Website Developer
                    </span>
                                <a href="">View More <Icon iconId={'arrow-right'}/></a>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>

                </StyledServicesBox>
            </Container>

        </StyledServices>
    );
};

const StyledServices = styled.section`
  max-height: 653px;
  background: #222;
`
const StyledServicesTitle = styled.h2`

`
const StyledServicesBox = styled.div`
  max-height: 530px;
  max-width: 1065px;
  border: 2px solid floralwhite;
  
`