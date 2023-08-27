import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import Instagram from "../../../assets/images/social/instagram.256x256(1).png"
import Telegram from "../../../assets/images/social/telegram.256x256(1).png"
import Whatsapp from "../../../assets/images/social/whatsapp.256x256(1).png"

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
            <SocialContact>
                <SocialLink href="">
                    <img src={Instagram} alt=""/>
                </SocialLink>
                <SocialLink href="">
                    <img src={Whatsapp} alt=""/>
                </SocialLink>
                <SocialLink href="">
                    <img src={Telegram} alt=""/>
                </SocialLink>

            </SocialContact>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  background: #222;
`
const SocialContact = styled.div`

`

const SocialLink = styled.a`
  width: 33px;
  height: 33px;
  outline: 1px solid crimson;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
  }
`