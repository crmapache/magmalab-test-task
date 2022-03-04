import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { App } from './componets/App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { Helmet } from 'react-helmet'

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
