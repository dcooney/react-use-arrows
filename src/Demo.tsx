import React from 'react'
import useArrows from './lib/useArrows'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <div className="container">
         <div className="prose w-full">
            <Header />
            <div className="py-5 grid grid-cols-2 gap-5 items-start">
               <div ref={containerRef} className="grid gap-2">
                  <h2 className="m-0">Basic Example</h2>
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
            <Footer />
         </div>
      </div>
   )
}
