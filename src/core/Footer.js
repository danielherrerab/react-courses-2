import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    bottom: 0,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '100%',
    height: 56,
    padding: 10
  }
}))

const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  console.info('theme', theme)

  return (
    <footer className={classes.root} role='contentinfo'>
      <Typography variant='h6'>Fancy Page Footer</Typography>
    </footer>
  )
}

export default Footer
