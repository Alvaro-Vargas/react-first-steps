# Start guide
Start the project: `yarn dev`

# Step 1
`yarn init -y`
 
 ```javascript
  yarn add 
    @babel/core 
    @babel/preset-env 
    @babel/preset-react 
    webpack 
    webpack-cli 
    -D
 ```

## Babel

***From:*** [Babel Website](https://babeljs.io/docs/en/next/)

#### What is it?
Babel is a JavaScript compiler.
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

***From Article***: [What are Babel "plugins" and "presets"?](https://www.newline.co/fullstack-react/articles/what-are-babel-plugins-and-presets/)

Babel is a JavaScript transpiler. Babel enables us to write modern JavaScript that will be "transpiled" to widely-supported ES5 JavaScript. We call this process transpiling.



***Very Good* Article**: What is @babel/preset-env and why do I need it?](https://blog.jakoblind.no/babel-preset-env/)

> **Babel doesn’t do anything out-of-the-box but Babel is built on presets and plugins. If you don’t add any presets or plugins, then Babel will do nothing.**

To make Babel actually do something, we need to add a plugin. It’s the plugins that does the heavy lifting.

Each plugin is it’s own NPM library. So for every plugin you want to install, you have to install a new NPM library.

### For Example...
You have a file with the following code:
```javascript
const hello = () => console.log("hello world!");
```
That is an arrow function which is an ES6 feature. This is supported in most browsers but not all, that’s why it’s a good idea to transpile it to ES5. 
**If you run this file through Babel, nothing will change.**

You will need a plugin to transpile the function you have written.<br>
I.e:<br>
`@babel/plugin-transform-arrow-functions` - Plugin responsible for transpiling arrow functions.

**But if you want to use more ES6 features you would need to install one NPM package and add an entry in .babelrc for every feature. <br> That’s just too much work. <ins> But there is a solution to this: presets!</ins>**

#### Presets
The Babel foundation has created presets that contains common bundles of plugins. **<ins>That means you only have to do the NPM installation and babel configuration once** and then a bunch of plugins are automatically installed for you.

---
## Used in this project

### Tooling > @babel/core 
Babel compiler core.


### Presets > @babel/preset-env 
**`@babel/preset-env`** is a smart preset that **allows you to use the latest JavaScript without needing to micromanage** which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

[Learn More](https://babeljs.io/docs/en/next/babel-preset-env)

### Presets > @babel/preset-react 
Basically, it transform JSX to java Script.

[Learn More](https://babeljs.io/docs/en/next/babel-preset-react)

---
## Webpack 
**From:** [Webpack - npm](https://www.npmjs.com/package/webpack)

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

webpack is used to compile JavaScript modules. Once installed, you can interface with webpack either from its CLI or API.

### [WebPack Documentation](https://webpack.js.org/)

#### [Concepts](https://webpack.js.org/concepts/)

At its core, webpack is a ***<ins>static module bundler*** for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

#### Loaders
Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

### webpack-cli 
We installed webpack-cli so that we can use webpack in the command line.

---
### Valuable reads:

1. [How to setup Webpack and Babel for React](https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph)

1. [Tutorial: How to set up React, webpack, and Babel from scratch (2020)](https://www.valentinog.com/blog/babel/)

---
# STEP 2
```javascript
yarn add 
  react 
  react-dom    
```
## React
[React Docs](https://reactjs.org/docs/getting-started.html)
A JavaScript library for building user interfaces

[React Concepts](https://reactjs.org/docs/hello-world.html)

## react Dom
The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

# STEP 3

- Configure Babel
  - `babel.config.js`
    - Add the presets you will be using

  - Configure Webpack
    - `webpack.config.js`
    - Create application entry point: `ser/index.js`

`yarn add babel-loader -D`

`yarn add webpack-dev-server -D`

# STEP 4

### Add 2 new loaders to the webpack
#### Importing CSS files

```javascript
yarn add
  style-loader
  css-loader
  -D
```

style-loader
-> used to import the `.CSS` files. 

css-loader
-> User to handle different functionalities inside css.
i.e.: You can have a `background: url('img');
To help the webpack to understand scenarios like the import of an image inside a css property.

# STEP 5 - import image file

new loader for the webpack

```javascript
yarn add
  file-loader
  -D
```

# STEP 6 - 

Running this code at this moment:
```javascript
class TechList extends Component {
  state = {
    name: 'Alvaro',
  }

  render(){
    return(
      <h1>Hello {this.state.name}</h1>
    );
  }
}
```

Will raise error, as babel does not not how to handle this syntax. 

This is further explained here:
[Constructor Docs](https://reactjs.org/docs/react-component.html#constructor)

So, the code will run if you write it as follows:
```javascript
class TechList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Alvaro'
    }
  }

  render(){
    return (
      <h1>Hello {this.state.name}</h1>
    );
  }
}

export default TechList;
```

BUT, we can still use this less "verbose" syntax if we add a **New Babel Plugin**

```javascript
yarn add
  @babel/plugin-proposal-class-properties
  -D
```


# React Reads:

Why every `handleEvent` must be a arrow function:
https://reactjs.org/docs/handling-events.html


---

```javascript
yarn add
  prop-types
```