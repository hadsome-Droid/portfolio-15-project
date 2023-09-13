import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {Card} from "../../../components/generator/Card";
import Proj1 from '../../../assets/images/projects/proj1.webp'
import Proj2 from '../../../assets/images/projects/proj2.webp'
import Proj3 from '../../../assets/images/projects/proj3.webp'
import Proj4 from '../../../assets/images/projects/proj4.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import Dots from "../../../assets/images/Dots.png"
import {theme} from "../../../styles/Theme";

const projectItems = ['Story', 'Post', 'Banner', 'Trailer', 'Design', 'More']

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <Title textTitle={'Projects'}/>
                <ProjectMenu>
                    <Menu itemsMenu={projectItems}/>
                </ProjectMenu>
                <FlexWrapper content={'center'} wrap={'wrap'} gap={'38px'}>
                    <Card src={Proj1} text={'Story motion for sale English courses'}/>
                    <Card src={Proj2} text={'Story motion for sale English courses'}/>
                    <Card src={Proj3} text={'Story motion for sale English courses'}/>
                    <Card src={Proj4} text={'Story motion for sale English courses'}/>
                    <Card src={Proj1} text={'Story motion for sale English courses'}/>
                    <Card src={Proj2} text={'Story motion for sale English courses'}/>
                    <Card src={Proj3} text={'Story motion for sale English courses'}/>
                    <Card src={Proj4} text={'Story motion for sale English courses'}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  h2{
    padding-top: 60px;
    margin-bottom: 15px;
  }
  
  ${Container}{
    position: relative;
    
    z-index: 0;
    
    &:before{
      content: '';
      display: block;
      width: 413px;
      height: 505px;
      background-image: url(${Dots});
      position: absolute;
      z-index: -1;
    }
  }
`
const ProjectMenu = styled.nav`
  padding: 50px 30px;

  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 159px;
    border-radius: 67px;
    border: 3px solid #4C546C;
    background-color: ${theme.colors.dark.primaryBg};

    a {
      font-size: 20px;
      font-weight: 400;
      padding-bottom: 5px;
      width: 100%;
      
    }
    &:hover{
      background-color: ${theme.colors.dark.secondaryBg};
      border-radius: 67px;
      border: transparent;
    }
    
  }
`
