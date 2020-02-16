import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class NavBar extends Component {
  /**
   * What's good about accessing context through here is that you can also use the
   * consumer on functional based components and also use them for multiple instancese in a component
   */
  render() {
    return (
      <ThemeContext.Consumer>{(context) => { // this component has a function right after which get's our JSX
        const { isLightTheme, light, dark } = context 
        const theme = isLightTheme ? light : dark;
  
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
      }}</ThemeContext.Consumer>
    )
  }
}

export default NavBar;