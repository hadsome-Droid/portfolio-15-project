import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {Generator} from "../../../components/generator/Generator";
import Proj1 from '../../../assets/images/projects/proj1.webp'
import Proj2 from '../../../assets/images/projects/proj2.webp'
import Proj3 from '../../../assets/images/projects/proj3.webp'
import Proj4 from '../../../assets/images/projects/proj4.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

const projectItems = ['Story', 'Post', 'Banner', 'Trailer', 'Design', 'More']

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <ProjectsTitle>Projects</ProjectsTitle>
                <Menu itemsMenu={projectItems}/>
                <FlexWrapper wrap={'wrap'} gap={'10px'}>
                    <Generator src={Proj1} text={'Story motion for sale \n' +
                        'English courses'}/>
                    <Generator src={Proj2} text={'Story motion for sale \n' +
                        'English courses'}/>
                    <Generator src={Proj3} text={'Story motion for sale \n' +
                        'English courses'}/>
                    <Generator src={Proj4} text={'Story motion for sale \n' +
                        'English courses'}/>
                    <Generator src={Proj1} text={'Story motion for sale \n' +
                        'English courses'}/>
                    <Generator src={Proj2} text={'Story motion for sale \n' +
                        'English courses'}/>
                    <Generator src={Proj3} text={'Story motion for sale \n' +
                        'English courses'}/>
                    <Generator src={Proj4} text={'Story motion for sale \n' +
                        'English courses'}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`

const ProjectsTitle = styled.h3`

`