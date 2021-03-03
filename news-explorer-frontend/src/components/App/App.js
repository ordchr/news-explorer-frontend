import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UI from '../UI/UI';
import Main from '../Main/Main';

function App() {
  return (
    <div className="page">
      <div className="page__section">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/ui">
            <UI />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
