# react-use-arrows

A React hook for traversing DOM elements with keyboard arrow keys.

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

## Options

The `useArrows` hook accepts an optional parameter which is a collection of configuration props.

| Prop        | Description                                | Default                                                    | Type          |
|-------------|--------------------------------------------|------------------------------------------------------------|---------------|
| `selectors` | Array of elements that should receive focus.      | `['a:not([disabled])', 'button:not([disabled])', 'input']` | Array\|String |
| `useTab`    | Use tab key to traverse focusable elements. | true                                                       | Boolean       |
| `useNextPrev` | Use right and left arrows to move next and previous. | false                                                       | Boolean       |
| `loop`      | Loop through focusable elements.           | true                                                       | Boolean       |False    |

```javascript
const ref = useArrowControls( { 
   focusable: ['a', 'span[role="button"]'],
   useTab: false,
});
