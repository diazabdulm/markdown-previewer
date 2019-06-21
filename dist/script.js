function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // React:
marked.setOptions({
  breaks: true });


class MarkDownPreviewer extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      input: placeholderMarkdown });_defineProperty(this, "handleInput",


    e => {
      this.setState({
        input: e.target.value });

    });_defineProperty(this, "getMarkup",

    () => {
      const markup = marked(this.state.input);
      return { __html: markup };
    });}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement("textarea", { id: "editor", className: "w-100", rows: 4, onChange: this.handleInput, value: this.state.input }),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.getMarkup() })));


  }}


const placeholderMarkdown =
`# Hi there, this is a React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

ReactDOM.render(React.createElement(MarkDownPreviewer, null), document.getElementById('root'));