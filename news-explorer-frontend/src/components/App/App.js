import './App.css';
import { Route, Switch } from 'react-router-dom';
import UI from '../UI/UI';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

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
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
