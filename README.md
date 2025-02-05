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
import React from 'react'
import useArrows from 'react-use-arrows'

export default function App() {
   const menuRef = useArrows();

   // Typescript.
   // const menuRef = useArrows() as React.RefObject<HTMLDivElement>

   return (
      <div ref={menuRef}>
         <ul>
            <li>
               <a href="https://github.com/">Github</a>
            </li>
            <li>
               <a href="https://npmjs.com/">NPM</a>
            </li>
            <li>
               <a href="https://react.dev/">React</a>
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
| `selectors`   | DOM element selectors that should receive focus.        | [List](https://github.com/dcooney/react-use-arrows/blob/main/src/lib/useArrows.tsx#L4) | `Array\|String` |
| `useTab`      | Allow `Tab` key to navigate focusable elements. | true                                                       | `Boolean`      |
| `useUpDown`   | Up and down arrows navigate focusable elements. | true                                                       | `Boolean`       |
| `useLeftRight` | Left and right arrows navigate focusable elements. | false                                                       | `Boolean`       |
| `loop`        | Loop through focusable elements.           | true                                                       |`Boolean`       |False    |

```javascript
const ref = useArrows( { 
   selectors: ['li[role="button"]', 'button'],
   useTab: false,
});
