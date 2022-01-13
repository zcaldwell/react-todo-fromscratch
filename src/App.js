import Auth from './views/Auth/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser, logout } from './services/users';
import { useState } from 'react';
import './App.css';
import List from './views/List/List';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <div className="logout">
                <header>
                  <button className="logout-button" onClick={logoutUser}>
                    Log Out
                  </button>
                </header>
                <List />
              </div>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
