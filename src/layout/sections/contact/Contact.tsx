import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Contact = () => {
    return (
        <StyledContact>
            <Title textTitle={'Contact Us'}/>
            <form action="">
                <h2>Get in touch</h2>
                <input type="email"/> <input type="phone"/>
                <textarea/>
                <button type={'submit'}>Send</button>
            </form>
            <FlexWrapper>
                <Icon iconId={'location'}/>
                <span>Location</span>
                <span>Mashhad/Iran</span>
            </FlexWrapper>
            <FlexWrapper>
                <Icon iconId={'phone'}/>
                <span>Phone</span>
                <span>+989150063913</span>
            </FlexWrapper>
            <FlexWrapper>
                <Icon iconId={'mail'}/>
                <span>Email</span>
                <span>arkn3913@gmail.com</span>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  background: #222;
`