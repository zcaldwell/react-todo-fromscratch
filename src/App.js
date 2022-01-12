import Auth from './views/Auth/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser } from './services/users';
import { useState } from 'react';
import './App.css';
import List from './views/List/List';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <div className="logout">
                <h1>Hi</h1>
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
