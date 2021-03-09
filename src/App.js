import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetail from './Components/MovieDetail/MovieDetail';

const App = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="row justify-content-between">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/movie-detail/:id">
                  <MovieDetail></MovieDetail>
                </Route>
                <Route path="*">
                  <h1>404 Not Found!</h1>
                </Route>
              </Switch>
            </Router>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
