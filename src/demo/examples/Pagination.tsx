import React from 'react'
import useArrows from '../../lib/useArrows'
import ArrowKey from '../components/ArrowKey'

export default function Pagination() {
   const ref = useArrows({
      useUpDown: false,
      useLeftRight: true,
      loop: false
   }) as React.RefObject<HTMLDivElement>

   return (
      <>
         <h2 className="m-0">Pagination</h2>
         <p className="text-sm m-0 mb-2 p-0">
            Place focus inside the pagination and use your{' '}
            <ArrowKey dir="left" /> and <ArrowKey dir="right" /> arrow keys to
            navigate the links.
         </p>
         <div ref={ref} className="join">
            <button className="join-item btn btn-md">&laquo; Prev</button>
            <button className="join-item btn btn-md btn-active border border-l-black/5">
               4
            </button>
            <button className="join-item btn btn-md border border-l-black/5">
               5
            </button>
            <button className="join-item btn btn-md border border-l-black/5">
               6
            </button>
            <button className="join-item btn btn-md border border-l-black/5">
               7
            </button>
            <button className="join-item btn btn-md border border-l-black/5">
               7
            </button>
            <button className="join-item btn btn-md border border-l-black/5">
               Next &raquo;
            </button>
         </div>
         <p className="text-xs m-0 mt-4 text-slate-500 py-0 px-2">
            <strong>Note</strong>: <ArrowKey dir="up" /> <ArrowKey dir="down" />{' '}
            arrows and looping have been disabled in this example.
         </p>
      </>
   )
}
