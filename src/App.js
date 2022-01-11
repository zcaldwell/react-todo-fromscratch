import Auth from './views/Auth/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser, logout } from './services/users';
import { useState } from 'react';
import './App.css';

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
                <h1>Signed In</h1>
                <img src="./assets/spiderliliez.gif" />
                <button onClick={logoutUser}>Log Out</button>
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
