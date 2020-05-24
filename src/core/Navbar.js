import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { Link } from 'react-router-dom'

const Navbar = ({ closeNavbar, navbar }) => {
  function onOpen () {
    console.log('opening')
  }
  function onClose () {
    console.log('closing')
  }
  return (
    <SwipeableDrawer open={navbar} onOpen={onOpen} onClose={onClose} anchor='left' role='navigation'>
      <h1>Fancy Page Navbar</h1>
      <ul>
        <li>
          <Link onClick={closeNavbar} to='/'>Home</Link>
        </li>
        <li>
          <Link onClick={closeNavbar} to='/about'>About</Link>
        </li>
        <li>
          <Link onClick={closeNavbar} to='/blog'>Blog</Link>
        </li>
      </ul>
    </SwipeableDrawer>
  )
}

export default Navbar
