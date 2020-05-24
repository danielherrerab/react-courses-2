import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: '#2A1664',
    typography: {
      fontFamily: [
        '"Poppins"',
        'sans-serif'
      ].join(',')
    },
    primary: {
      light: '#280080',
      main: '#1a0054',
      dark: '#100033',
      contrastText: '#cacaca'
    },
    secondary: {
      light: '#0dd9c4',
      main: '#0aa999',
      dark: '#07786d',
      contrastText: '#131313'
    }
  }
})

export default theme
