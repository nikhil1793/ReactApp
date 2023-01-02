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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);