// JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>;
var template = /*#__PURE__*/React.createElement("p", {
    id: "someid"
  }, "This is JSX from app.js!");
var appRoute = document.getElementById("app");

ReactDOM.render(template, appRoute);