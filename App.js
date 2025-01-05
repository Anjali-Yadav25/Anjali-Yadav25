const heading = React.createElement(
    "div", 
    {id:"child"}, 
    [React.createElement("h1", {}, "Hello h1 tag "), 
    React.createElement("h2", {}, "Hello h2 tag")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);