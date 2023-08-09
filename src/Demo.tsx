import React from 'react'
import useArrows from './lib/useArrows'

export default function App() {
   const containerRef = useArrows({
      useTab: false,
      useNextPrev: true,
      loop: false
   }) as React.RefObject<HTMLDivElement>

   const containerRef2 = useArrows({
      useTab: false,
      loop: false
   }) as React.RefObject<HTMLDivElement>

   return (
      <div className="p-10 grid grid-cols-2 gap-5" data-theme="emerald">
         <div ref={containerRef} className="grid gap-2">
            <button className="btn btn-primary">Button One</button>
            <button className="btn btn-secondary">Button Two</button>
            <button className="btn btn-accent">Button Three</button>
            <button className="btn btn-neutral">Button Four</button>
         </div>
         <div ref={containerRef2} className="grid gap-2">
            <button className="btn btn-primary">Button One</button>
            <button className="btn btn-secondary">Button Two</button>
            <button className="btn btn-accent">Button Three</button>
            <button className="btn btn-neutral">Button Four</button>
         </div>
      </div>
   )
}
