import { BrowserRouter, Route} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
          <BrowserRouter>

        <Route path='/'>
            <AllMeetupsPage/>
        </Route>

          </BrowserRouter>
/*    <BrowserRouter>
      <Routes>
          <Route path='/new-meetup'>
              <NewMeetupPage/>
          </Route>
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <Routes>
          <Route path='/favorites'>
              <FavoritesPage/>
          </Route>
      </Routes>
    </BrowserRouter>*/
  );
}

export default App;
