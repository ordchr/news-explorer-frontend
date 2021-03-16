import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import "./App.css";
import UI from "../UI/UI";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      mainApi
        .validateToken(localStorage.getItem("jwt"))
        .then((res) => {
          res.loggedIn = true;
          setCurrentUser(res);
          history.push("/");
        })
        .catch((err) => {
          console.log(`Ошибка запроса к API. Код ошибки: ${err.status}`);
          if (err.status === 401) {
            console.log("Токен не передан или передан не в том формате. Переданный токен не корректен");
          }
        });
    }
  }, [history]);

  return (
    <div className="page">
      <div className="page__section">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route exact path="/">
              <Main setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/ui">
              <UI />
            </Route>
            <ProtectedRoute path="/saved-news" component={SavedNews} loggedIn={currentUser.loggedIn}></ProtectedRoute>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
