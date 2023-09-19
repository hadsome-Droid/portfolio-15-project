import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Instagram from "../../../assets/images/social/instagram.256x256(1).png"
import Telegram from "../../../assets/images/social/telegram.256x256(1).png"
import Whatsapp from "../../../assets/images/social/whatsapp.256x256(1).png"
import Location from "../../../assets/images/contactsUs/location.png"
import Telephone from "../../../assets/images/contactsUs/telephone.png"
import Email from "../../../assets/images/contactsUs/email.png"
import {Container} from "../../../components/Container";

const contactItems = [
    {
        src: Location,
        text: 'Location',
        contact: 'Mashhad/Iran'
    },
    {
        src: Telephone,
        text: 'Phone',
        contact: '+989150063913'
    },
    {
        src: Email,
        text: 'Email',
        contact: 'arkn3913@gmail.com'
    },
]
const socialItems = [ Instagram, Whatsapp, Telegram]

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
                                    <img src={c.src} alt="#"/>
                                    <h3>{c.text}</h3>
                                    <span>{c.contact}</span>
                                </ContactBlock>
                            )
                        })}

                    </FlexWrapper>
                </ContactCard>

                <SocialContact>
                    {socialItems.map((elm)=>{
                        return(
                            <SocialLink href="">
                                <img src={elm} alt=""/>
                            </SocialLink>
                        )
                    })}
                </SocialContact>
            </Container>

        </StyledContact>
    );
};

const StyledContact = styled.section`
  background: #222;
  
  ${Container}{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 800px;
    
}
  h2{
    margin-bottom: 30px;
  }
`
const ContactCard = styled.div`
  background: #2C2B2B;
  width: 96vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 150px;
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
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
  
  img{
    position: absolute;
    left: -38px;
    top: 0;
  }
  
  h3{
    font-size: 16px;
    font-weight: 500;
  }
  
  span{
    color: #8B8B8B;
    font-size: 12px;
    font-weight: 400;
  }
    
`

const SocialContact = styled.div`
  display: flex;
  justify-content: space-between;
  width: 142px;
  margin: 0 auto;
`

const SocialLink = styled.a`
  width: 33px;
  height: 33px;
  display: inline-block;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`