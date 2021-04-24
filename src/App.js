import { GlobalStyles } from './GlobalStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, NewPerson } from './views'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/new" component = {NewPerson} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
