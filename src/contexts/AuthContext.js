import React, { Component, createContext } from 'react'

const { Provider, Consumer } = React.createContext()

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: true
  }

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated})
  }

  render() {
    return (
      <Provider value={{ ...this.state, toggleAuth: this.toggleAuth}}>
        {this.props.children}
      </Provider>
    )
  }
}

export { AuthContextProvider, Consumer as AuthContextConsumer }