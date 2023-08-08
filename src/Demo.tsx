import React from 'react'
import useArrows from './lib/useArrows'

export default function App() {
   const containerRef = useArrows({
      useTab: false,
      loop: false
   }) as React.RefObject<HTMLDivElement>

   return (
      <div className="p-5">
         <div ref={containerRef} className="flex flex-col">
            <li>
               <button>One</button>
            </li>
            <li>
               <button>Two</button>
            </li>
            <li>
               <button>Three</button>
            </li>
            <li>
               <button>Four</button>
            </li>
         </div>
      </div>
   )
}
