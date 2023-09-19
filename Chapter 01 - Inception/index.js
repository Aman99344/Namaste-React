// const heading = document.createElement("h1");

// console.log(heading);

// const text = document.createTextNode("Hii Hello")
// console.log(text);

// heading.appendChild(text);

// document.body.appendChild(heading)


const elem = React.createElement("div", null, [
  React.createElement("div", {id:"hii"}, [
    React.createElement("h3", null, "I am h3")
  ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(elem)