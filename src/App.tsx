import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {About} from "./layout/sections/about/About";
import {Services} from "./layout/sections/services/Services";
import {Learning} from "./layout/sections/learning/Learning";
import {Contact} from './layout/sections/contact/Contact';

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <About/>
            <Services/>
            <Learning/>
            <Contact/>
        </StyledApp>
    );
}

export default App;
const StyledApp = styled.div`

`
