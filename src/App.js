import { GlobalStyles } from './GlobalStyles'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, NewPerson } from './views'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path = "/" component = {Home} />
        <Route path = "/new" component = {NewPerson} />
      </BrowserRouter>
    </>
  );
}

export default App;
