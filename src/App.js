import { GlobalState } from './GlobalState/GlobalState';
import { GlobalStyle } from './GlobalStyle.styled';
import Router from './Router/Router';

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
