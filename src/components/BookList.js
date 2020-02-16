import React, { Component } from 'react'
import { ThemeContext} from '../contexts/ThemeContext'

class BookList extends Component{
  /**
   * The contextType property on a class can be assigned a Context object created by React.createContext(). 
   * This lets you consume the nearest current value of that Context type using this.context. 
   * You can reference this in any of the lifecycle methods including the render function.

   * this gives us the data from the context provider
   * thus console.log(this.context) will return the value that is given by the provider
   * which is an object
   * 
   *  static class field to initialize your contextType
   * React will find the closest theme Provider above and use its value.
   * 
   */
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark} = this.context
    const theme = isLightTheme ? light : dark

      return (
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
          <ul>
            <li style={{ background: theme.ui }}>the way of kings</li>
            <li style={{ background: theme.ui }}>the name of the wind</li>
            <li style={{ background: theme.ui }}>the final empire</li>
          </ul>
        </div>
      )
  }
}

export default BookList;