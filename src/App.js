import { GlobalStyles } from './GlobalStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './views'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/new" component = {() => <Home showNewUser />} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
