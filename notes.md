The contextType property on a class can be assigned a Context object created by React.createContext(). 
This lets you consume the nearest current value of that Context type using this.context. 
You can reference this in any of the lifecycle methods including the render function.

this gives us the data from the context provider
thus console.log(this.context) will return the value that is given by the provider
which is an object
    
static class field to initialize your contextType
React will find the closest theme Provider above and use its value.