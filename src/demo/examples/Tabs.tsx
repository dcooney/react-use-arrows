import React from 'react'
import useArrows from '../../lib/useArrows'

export default function Tabs() {
   const ref = useArrows({
      selectors: ['span[role="button"]'],
      useUpDown: true,
      useLeftRight: true,
      useTab: false,
      loop: false
   }) as React.RefObject<HTMLDivElement>

   return (
      <>
         <h2 className="m-0">Tabs</h2>
         <p className="text-sm m-0 mb-2 p-0">
            Use your up/down and left/right arrow keys to move through the items
            in the tab group.
         </p>
         <div ref={ref} className="tabs">
            <span role="button" className="tab tab-lg tab-lifted">
               Tab #1
            </span>
            <span
               role="button"
               className="tab tab-lg tab-lifted tab-active"
               tabIndex={0}
            >
               Tab #2
            </span>
            <span role="button" className="tab tab-lg tab-lifted">
               Tab #3
            </span>
            <span role="button" className="tab tab-lg tab-lifted">
               Tab #4
            </span>
         </div>
         <p className="text-xs m-0 mt-4 text-slate-500 py-0 px-2">
            <strong>Note</strong>: Looping and tab key support has been disabled
            in this example.
         </p>
      </>
   )
}
