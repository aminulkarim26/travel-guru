import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import travel from './Fake/travel';
import BookingDetails from './components/BookingDetails/BookingDetails';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState(travel)
  return (
    <div className='app'>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="contact">
            <Contact />
          </Route>
          <Route path="/booking/:bookingId">
            <Booking />
          </Route>
          <PrivateRoute path="/about/:id">
            <BookingDetails />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </div>

  );
}

export default App;