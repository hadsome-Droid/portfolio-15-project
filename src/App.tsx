import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {About} from "./layout/sections/about/About";

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <About/>
        </StyledApp>
    );
}

export default App;
const StyledApp = styled.div`

`
