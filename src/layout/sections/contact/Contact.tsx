import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import Instagram from "../../../assets/images/social/instagram.256x256(1).png"
import Telegram from "../../../assets/images/social/telegram.256x256(1).png"
import Whatsapp from "../../../assets/images/social/whatsapp.256x256(1).png"
import {Container} from "../../../components/Container";

const contactItems = [
    {
        iconId: 'location',
        text: 'Location',
        contact: 'Mashhad/Iran'
    },
    {
        iconId: 'phone',
        text: 'Phone',
        contact: '+989150063913'
    },
    {
        iconId: 'mail',
        text: 'Email',
        contact: 'arkn3913@gmail.com'
    },
]

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <Title textTitle={'Contact Us'}/>
                <ContactCard>
                    <Form action="">
                        <FormTitle>Get in touch</FormTitle>
                        <Field type="email" placeholder={'E-mail'}/> <Field type="phone" placeholder={'Phone'}/>
                        <Aria placeholder={'Massage'}/>
                        <Button type={'submit'}>Send</Button>
                    </Form>
                    <FlexWrapper direction={'column'} content={'center'} gap={'31px'}>

                        {contactItems.map((c) => {
                            return(
                                <ContactBlock>
                                    <Icon iconId={c.iconId}/>
                                    <span>{c.text}</span>
                                    <span>{c.contact}</span>
                                </ContactBlock>
                            )
                        })}

                    </FlexWrapper>
                </ContactCard>

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
            </Container>

        </StyledContact>
    );
};

const StyledContact = styled.section`
  background: #222;
  
  ${Container}{
  padding-top: 65px;
}
  h2{
    margin-bottom: 70px;
  }
`
const ContactCard = styled.div`
  background: #2C2B2B;
  width: 96vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 130px;
  padding-top: 53px;
  padding-bottom: 46px;
`
const Form = styled.form`
  width: 429px;
`
const FormTitle = styled.h3`
  font-size: 36px;
  font-weight: 500;
`
const Field = styled.input`
  margin: 23px 0;
  border-radius: 9px;
  background: #393838;
  border: transparent;
  width: 211px;
  height: 36px;
  padding-left: 30px;

`

const Aria = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 152px;
  border-radius: 9px;
  background: #393838;
  padding-left: 10px;
  padding-top: 5px;
  border: transparent;
  &::placeholder{
    padding-left: 20px;
    padding-top: 17px;
  }
  
  
  resize: none;
`
const Button = styled.button`
  display: inline-block;
  margin-top: 48px;
  width: 117px;
  height: 43px;
  border-radius: 9px;
  background: #2350D6;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`

const ContactBlock = styled.div`
 
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