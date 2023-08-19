import './App.css';
import styled from 'styled-components';
import {Icon} from "./components/icon/Icon";
import Mail from './assets/images/envelope.svg'
import Ins from './assets/images/instagram.svg'

function App() {
    return (
        <StyledApp>
            <Title>Welcome to IT-INCUBATOR</Title>
            <Icon iconId={'instagram'}/>
            <Icon iconId={'location'} width={'79'} height={'79'} viewBox={'0 0 79 79'}/>
            <Icon iconId={'envelope'} width={'56'} height={'56'} viewBox={'0 0 56 56'}/>
            {/*<img src={Mail} alt=""/>*/}
            {/*<img src={Ins} alt=""/>*/}
        </StyledApp>
    );
}

export default App;
const StyledApp = styled.div`
  min-height: 100vh;
  background-color: #377a8e;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
  color: rgba(33, 87, 242, 0.50);

`;