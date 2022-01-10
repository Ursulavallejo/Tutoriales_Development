import {Route, Router} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return ( <div>
          <Router>
        <Route path='/'>
            <AllMeetupsPage/>
        </Route>
          </Router>
      <Router>
          <Route path='/new-meetup'>
              <NewMeetupPage/>
          </Route>
      </Router>
      <Router>
          <Route path='/favorites'>
              <FavoritesPage/>
          </Route>
      </Router>
      </div>
  );
}

export default App;
