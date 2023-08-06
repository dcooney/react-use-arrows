# react-use-arrows

A React hook for traversing DOM elements with keyboard karrow keys.

[![npm](https://img.shields.io/npm/v/react-use-arrows)](https://www.npmjs.com/package/react-use-arrows)

## Install

```bash
# With npm
npm i react-use-arrows

# With Yarn
yarn add react-use-arrows
```

## Usage

```javascript
import useArrows from 'react-use-arrows'

export default function App() {
   const dropdownRef = useArrows();

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
