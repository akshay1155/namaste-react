/**
 * <div id="parent"
 *      <div id="child1">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */
const heading = React.createElement("div",{id: "parent"},[ 
    React.createElement("div",{},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")
]),
React.createElement("div",{},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")
]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


