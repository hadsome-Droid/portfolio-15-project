import './App.css';
import styled from 'styled-components';
import {Icon} from "./components/icon/Icon";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </StyledApp>
    );
}

export default App;
const StyledApp = styled.div`

`
