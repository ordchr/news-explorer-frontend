import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UI from '../UI/UI';

function App() {
  return (
    <div className="page">
      <div className="page__section">
        <Switch>
          <Route path="/ui">
            <UI />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
