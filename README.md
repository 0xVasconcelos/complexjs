## Complex.js
JavaScript complex numbers library 

## Code Examples

Some examples of using the Complex.js library.

## Get real, imaginary parts and the algebric expression from expressions, numbers and objects.


### Example

  	getComplex("4+3i");                           // From expressions * Output: {r: 4, i: 3, eq: "4+3i"}
  	getComplex({r: 4, i:3});                      // From objects * Output: {r: 4, i: 3, eq: "4+3i"}
  	getComplex({eq: "4+3i"});                     // From objects * Output: {r: 4, i: 3, eq: "4+3i"}
    getComplex("3i");                             // From complex numbers * Output: {r: 0, i: 3, eq: "0+3i"}
    getComplex(3);                                //From numbers * Output: {r: 3, i: 0, eq: "3+0i"}

## 

## Get sum of two complex numbers


### Example

  	sumComplex("4+3i", "3+4i");                   // From expressions * Output: {r: 7, i: 7, eq: "7+7i"}
  	sumComplex({r: 4, i:3}, {r: 3, i:4});         // From objects * Output: {r: 7, i: 7, eq: "7+7i"}
  	sumComplex({eq: "4+3i"}, {eq: "3+4i"});       // From objects * Output: {r: 7, i: 7, eq: "7+7i"}
    sumComplex("3i", "4i");                       // From complex numbers * Output: {r: 0, i: 7, eq: "0+7i"}
    sumComplex(3, 4);                             //From numbers * Output: {r: 7, i: 0, eq: "7+0i"}

## 

## Contributors

André Blanco <dsddd>

## License

Apache
