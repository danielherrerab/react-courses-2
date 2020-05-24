import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Header = ({ openNavbar }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar role='banner' position='static'>
        <Toolbar>
          <IconButton onClick={openNavbar} edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
