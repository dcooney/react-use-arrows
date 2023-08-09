import React from 'react'

export default function Footer() {
   return (
      <footer className="py-5 border-t text-center">
         <p className="m-0 p-0 pt-2 text-sm flex w-full gap-2 justify-center">
            <span>View Source:</span>
            <a href="https://www.npmjs.com/package/react-use-arrows">
               NPM
            </a>{' '}
            <span>/</span>
            <a href="https://github.com/dcooney/react-use-arrows">Github</a>
         </p>
      </footer>
   )
}
