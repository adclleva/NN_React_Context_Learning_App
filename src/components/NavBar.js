import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContextConsumer } from '../contexts/AuthContext';

class NavBar extends Component {
  /**
   * What's good about accessing context through here is that you can also use the
   * consumer on functional based components and also use them for multiple instancese in a component
   * 
   * This is another way of utilizing multiple consumers because having multiple static types in a class
   * does not work
   */
  render() {
    return (
      <AuthContextConsumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => { // this component has a function right after which get's our JSX
          const { isAuthenticated, toggleAuth } = authContext
          const { isLightTheme, light, dark } = themeContext 
          const theme = isLightTheme ? light : dark;

            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <div onClick={() => toggleAuth()}>
                  <h4>
                    {isAuthenticated ? "Logged in" : "Logged out"}
                    </h4>
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
        }}</ThemeContext.Consumer>

        
        )}</AuthContextConsumer>
        
        
        
    )
  }
}

export default NavBar;