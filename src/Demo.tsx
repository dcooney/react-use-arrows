import React from 'react'
import useArrows from './lib/useArrows'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
   const basicRef = useArrows() as React.RefObject<HTMLDivElement>

   const formRef = useArrows({
      useTab: false
   }) as React.RefObject<HTMLDivElement>

   const paginationRef = useArrows({
      useUpDown: false,
      useLeftRight: true,
      loop: false
   }) as React.RefObject<HTMLDivElement>

   const tabsRef = useArrows({
      selectors: 'span[role="button"]',
      useUpDown: true,
      useLeftRight: true,
      loop: false
   }) as React.RefObject<HTMLDivElement>

   return (
      <div className="container">
         <div className="prose w-full">
            <Header />
            <div className="py-10 grid grid-cols-2 gap-10 items-start">
               <div ref={basicRef} className="grid gap-2.5">
                  <h2 className="m-0">Basic Example</h2>
                  <p className="text-sm m-0 mb-2 p-0">
                     Tab into the button group and use your up/down arrow keys
                     to traverse the list.
                  </p>
                  <button className="btn">Button One</button>
                  <button className="btn btn-primary">Button Two</button>
                  <button className="btn btn-accent">Button Three</button>
                  <button className="btn btn-neutral">Button Four</button>
                  <button className="btn btn-error">Button Five</button>
               </div>
               <div ref={formRef} className="grid gap-2.5">
                  <h2 className="m-0">Mixed Content</h2>
                  <p className="text-sm m-0 mb-2 p-0">
                     Tab into the sign-up form and traverse the contents with
                     arrow keys.
                  </p>
                  <div className="grid gap-2.5 bg-slate-50 border border-slate-200 p-5 rounded-md">
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
                        <div className="grid grid-cols-3 gap-2">
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
                        <button className="btn btn-neutral px-5">
                           Sign Up
                        </button>
                     </div>
                  </div>
               </div>

               <div ref={paginationRef} className="grid gap-2">
                  <h2 className="m-0">Pagination</h2>
                  <p className="text-sm m-0 mb-2 p-0">
                     Place focus inside the pagination and use your left/right
                     arrow keys to traverse the items.
                  </p>
                  <div className="join">
                     <button className="join-item btn btn-md">
                        &larr; Prev
                     </button>
                     <button className="join-item btn btn-md btn-active">
                        4
                     </button>
                     <button className="join-item btn btn-md">5</button>
                     <button className="join-item btn btn-md">6</button>
                     <button className="join-item btn btn-md">7</button>
                     <button className="join-item btn btn-md">7</button>
                     <button className="join-item btn btn-md">
                        Next &rarr;
                     </button>
                  </div>
               </div>
               <div ref={tabsRef} className="grid gap-2">
                  <h2 className="m-0">Tabs</h2>
                  <p className="text-sm m-0 mb-2 p-0">
                     Use the up/down and left/right arrow keys to traverse the
                     items in the tab group.
                  </p>
                  <div className="tabs">
                     <span role="button" className="tab tab-lg tab-lifted">
                        Tab #1
                     </span>
                     <span
                        role="button"
                        className="tab tab-lg tab-lifted tab-active"
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
               </div>
            </div>
            <Footer />
         </div>
      </div>
   )
}
