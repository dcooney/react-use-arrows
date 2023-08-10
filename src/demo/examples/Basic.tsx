import React from 'react'
import useArrows from '../../lib/useArrows'
import ArrowKey from '../components/ArrowKey'

export default function Basic() {
   const ref = useArrows() as React.RefObject<HTMLDivElement>

   return (
      <div ref={ref} className="grid gap-2.5">
         <h2 className="m-0">Basic Example</h2>
         <p className="text-sm m-0 mb-2 p-0">
            Tab into the button group and use your <ArrowKey dir="up" /> and{' '}
            <ArrowKey dir="down" /> arrow keys to move through the items in the
            list.
         </p>
         <button className="btn">Button One</button>
         <button className="btn btn-primary">Button Two</button>
         <button className="btn btn-neutral">Button Three</button>
         <button className="btn btn-accent">Button Four</button>
      </div>
   )
}
