# use-arrow-controls

A React hook for traversing DOM elements with arrow keys.

[![npm](https://img.shields.io/npm/v/use-arrow-controls)](https://www.npmjs.com/package/use-arrow-controls)

## Install

```bash
# With npm
npm i use-arrow-controls

# With Yarn
yarn add use-arrow-controls
```

## Usage

```javascript
import useArrowControls from 'use-arrow-controls'
import { useRef } from 'react';

export default function App() {
   const dropdownRef = useRef();

   useArrowControls(true, dropdownRef);

   return (
      <div ref={dropdownRef}>
         <ul>
            <li>
               <a href="https://github.com/">Github</a>
            </li>
            <li>
               <a href="https://www.npmjs.com/">NPM</a>
            </li>
            <li>
               <a href="https://www.reactjs.org">React</a>
            </li>
         </ul>
      </div>
   )
}
```
