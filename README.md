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

The `useArrows` hook accepts an optional object parameter which is a collection of configuration props.

| Prop          | Description                                | Default                                                    | Type          |
|-------------  |--------------------------------------------|------------------------------------------------------------|---------------|
| `selectors`   | Elements that should receive focus.        | [List](https://github.com/dcooney/react-use-arrows/blob/main/src/lib/useArrows.tsx#L4) | `Array\|String` |
| `useTab`      | Use Tab key will traverse focusable elements. | true                                                       | `Boolean`      |
| `useNextPrev` | Use right(next) and left(prev) arrows to traverse focusable elements. | false                                                       | `Boolean`       |
| `loop`        | Loop through focusable elements.           | true                                                       |`Boolean`       |False    |

```javascript
const ref = useArrowControls( { 
   selectors: 'span[role="button"]',
   useTab: false,
});
