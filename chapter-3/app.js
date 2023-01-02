import { createRoot } from "react-dom/client";

/**
 * * React Component
 * ? Functional Component is normal function which return some piece of JSX
 * ? | some peice of React Elemement | some other componenet
 * * Name of the Component should get start with capital letter
 * * JSX is very secure , it also handle the XSS ( cross site scripting ) it does
 * * sanitization before its rendering
 */
const HeaderComponent0 = () => {
  return (
    <div>
      <h1>This is my first Functional Component</h1>{" "}
    </div>
  );
};

const reactElem = <h2>This is React Element | It is just a JSX | Object </h2>;

const ParagraphComponent = () => (
  <p>
    This is a paragraph functional component which can be used inside any other functional component, called as
    <i>
      <strong> Component Composition</strong>
    </i>
  </p>
);

const jsxOp = "JSX is OP";

const HeaderComponent = () => (
  <div>
    <h1>This is React Functional Component | Function </h1>
    {reactElem}
    {/* This is component composition | using component inside a component */}
    <ParagraphComponent />
    {ParagraphComponent()}
    {jsxOp}
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
