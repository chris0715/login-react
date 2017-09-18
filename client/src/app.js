import React, { Component } from 'react'
import  { render } from 'react-dom'
import HomePage from './components/HomePage'
import MiuTheme from 'material-ui/styles/MuiThemeProvider'
render(<MiuTheme>
    <HomePage />
</MiuTheme>, document.getElementById('root'))
