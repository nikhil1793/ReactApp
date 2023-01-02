import React from "react";
import  ReactDOM from "react-dom/client";

/**
 * * Parcel is Beast
 * ? Hot Module Reloading ( HMR )
 * ? Minification
 * ? Cleaning our Code ( eg. remove console.log )
 * ? Dev and Production Build : Building
 * ? Handle Port Number
 * ? Image Compression
 * ? File Watcher Algorithm - C++ 
 * ? Caching while development
 * ? Can handle HTTPS on dev
 * ? Consistence Hashing Algorithm
 * ? Zero Config
 * 
 * * Transitive Dependencies - nested dependencies of any node modules.
 * 
 * * npx - execute node command
 * * npx parcel <--entry-point> <build>
 */

// * React.createElement ==> Object ==> HTML(DOM)
const heading = React.createElement(
    "h1",
    {
        id: "greet",
        className: "heading",
    },
    "Hello!! ",
    React.createElement("b", null, 'Srivastava'),
    ". Welcome"
);

// * JSX ==> React.createElement ==> Object ==> HTML(DOM)
// * JSX ==> React.createElement [ done by babel ]
/**
 * * Two way of creating component - 
 * * 1. Functional Based Component
 * * 2. Classed Based Compoenet
 */
const newHeading = <h1> Hola!! This is new Heading Tag </h1>;

console.log(heading, newHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);