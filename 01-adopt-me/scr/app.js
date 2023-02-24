// Your code is going to go here
const pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "husky"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(pet),
    React.createElement(pet),
    React.createElement(pet),
  ]);
};

//  new react v8 course
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
