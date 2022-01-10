import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return ( <div>
          <Routes>
        <Route path='/'>
            <AllMeetupsPage/>
        </Route>
          </Routes>
      <Routes>
          <Route path='/new-meetup'>
              <NewMeetupPage/>
          </Route>
      </Routes>
      <Routes>
          <Route path='/favorites'>
              <FavoritesPage/>
          </Route>
      </Routes>
      </div>
  );
}

export default App;
