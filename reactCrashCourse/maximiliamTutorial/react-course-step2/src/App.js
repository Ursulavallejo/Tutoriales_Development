import {  Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
    return (<div>
            <Route path='/all-meetup'>
                <AllMeetupsPage/>
            </Route>
            <Route path='/new-meetup'>
                <NewMeetupPage/>
            </Route>
            <Route path='/favorites'>
                <FavoritesPage/>
            </Route>
        </div>
        );
        }

        export default App;