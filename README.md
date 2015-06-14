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
    getComplex(3);                                // From numbers * Output: {r: 3, i: 0, eq: "3+0i"}

## 

## Get sum of two complex expressions and numbers


### Example

  	sumComplex("4+3i", "3+4i");                   // From expressions * Output: {r: 7, i: 7, eq: "7+7i"}
  	sumComplex({r: 4, i:3}, {r: 3, i:4});         // From objects * Output: {r: 7, i: 7, eq: "7+7i"}
  	sumComplex({eq: "4+3i"}, {eq: "3+4i"});       // From objects * Output: {r: 7, i: 7, eq: "7+7i"}
    sumComplex("3i", "4i");                       // From complex numbers * Output: {r: 0, i: 7, eq: "0+7i"}
    sumComplex(3, "4i");                          // From complex numbers * Output: {r: 3, i: 4, eq: "3+4i"}
    sumComplex(3, 4);                             // From numbers * Output: {r: 7, i: 0, eq: "7+0i"}

## 

## Contributors

André Blanco <dsddd>

## License
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
