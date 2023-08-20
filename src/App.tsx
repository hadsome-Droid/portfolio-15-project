import './App.css';
import styled from 'styled-components';
import {Icon} from "./components/icon/Icon";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
        </StyledApp>
    );
}

export default App;
const StyledApp = styled.div`

`
