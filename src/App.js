import { Container, Grid} from '@material-ui/core';
import React from 'react'
import Profile from './componenets/Profile/Profile'
import Footer from './componenets/Footer/Footer'
import Header from './componenets/Header/Header'
import Portfolio from './Pages/Portfilio/Portfolio'
import Resume from './Pages/Resume/Resume'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Container>
      <Grid container>
        <Grid  item xs={12} sm={12} md={4} lg={3} style={{backgroundColor: 'blue'}} >
          <Profile />
        </Grid>
        <Grid item xs style={{backgroundColor: 'lightblue'}}>
          <Header />
          <Router>
            <Switch>
            <Route path='/portfolio'>
            <Portfolio />
            </Route> 
            <Route>
            <Resume path ='/' />
            </Route>

            </Switch>
          </Router>
              
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
