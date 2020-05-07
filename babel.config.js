module.exports = {
  presets: [
    "@babel/preset-env", //Change JS that the browser is not up to date
    "@babel/preset-react" // Transform things from React. Like JSX
  ],
  plugins:[
    '@babel/plugin-proposal-class-properties'
  ]
};