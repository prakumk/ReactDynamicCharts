import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import React from 'react';
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'

const theme = {
  ...defaultTheme,
}

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Preflight />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)