import React from 'react'
import useArrows from '../../lib/useArrows'
import ArrowKey from '../components/ArrowKey'

export default function Mixed() {
   const ref = useArrows({
      loop: false
   }) as React.RefObject<HTMLDivElement>

   return (
      <div className="grid gap-2.5">
         <h2 className="m-0">Mixed Content</h2>
         <p className="text-sm m-0 mb-2 p-0">
            Tab into the sign-up form and use your <ArrowKey dir="up" /> and{' '}
            <ArrowKey dir="down" /> arrow keys to navigate the different content
            types with arrow keys.
         </p>
         <div
            ref={ref}
            className="grid gap-2.5 bg-slate-50 border border-slate-200 p-5 rounded-md"
         >
            <div>
               <label
                  htmlFor="email"
                  className="font-semibold mb-1.5 block text-black"
               >
                  Email Address
               </label>
               <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="input input-bordered w-full"
               />
            </div>
            <div className="form-control">
               <h4 className="p-0 m-0 mb-1">Interests</h4>
               <div className="flex gap-2.5">
                  <label className="label cursor-pointer justify-start gap-2">
                     <input type="checkbox" className="checkbox" />
                     <span className="label-text">JavaScript</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-2">
                     <input type="checkbox" className="checkbox" />
                     <span className="label-text">CSS</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-2">
                     <input type="checkbox" className="checkbox" />
                     <span className="label-text">Node</span>
                  </label>
               </div>
            </div>
            <p className="m-0 mb-2 text-sm">
               By submitting this form you agree to our{' '}
               <a href="#">terms and conditions</a>.
            </p>
            <div>
               <button className="btn btn-neutral px-5">Sign Up</button>
            </div>
         </div>
      </div>
   )
}
