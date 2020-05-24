import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './core/Header'
import Navbar from './core/Navbar'
import Footer from './core/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Read from './pages/Read'

const App = () => {
  const [navbar, setNavbar] = React.useState(false)

  function openNavbar () {
    setNavbar(true)
  }

  function closenNavbar () {
    setNavbar(false)
  }

  return (
    <Router>
      <Header openNavbar={openNavbar} />
      <Navbar navbar={navbar} closeNavbar={closenNavbar} />
      <main role='main'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/read/:id' component={Read} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
