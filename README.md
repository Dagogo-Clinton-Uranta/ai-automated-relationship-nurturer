
## Notes

I am using react app rewired, and a config-overrides.js file, in the root, 

to configure @react-spring
 to work, when i was receiving the following errors on netlify, to handle the question marks, (under new babel loader standards) --> 

 ./node_modules/@react-spring/core/dist/react-spring_core.legacy-esm.js 110:11
Module parse failed: Unexpected token (110:11)
File was processed with these loaders:
* ./node_modules/babel-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.

function detachRefs(ctrl, ref) {
   ctrl.ref?.delete(ctrl);
   ref?.delete(ctrl);
}

IF STYLING IS STILL NOT WORKING, RUN NPM RUN BUILD AND UPLOAD TO YOUR HOSTING SITE MANUALLY.
