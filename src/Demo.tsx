import React from 'react'
import Footer from './demo/components/Footer'
import Header from './demo/components/Header'
import Basic from './demo/examples/Basic'
import Dropdown from './demo/examples/Dropdown'
import Mixed from './demo/examples/Mixed'
import Pagination from './demo/examples/Pagination'
import Tabs from './demo/examples/Tabs'

export default function App() {
   return (
      <div className="container">
         <div className="prose w-full">
            <Header />
            <div className="py-10 grid sm:grid-cols-2 gap-10 items-start">
               <Basic />
               <Dropdown />
               <Mixed />
               <div className="grid gap-2.5">
                  <Pagination />
                  <hr className="my-6" />
                  <Tabs />
               </div>
            </div>
            <Footer />
         </div>
      </div>
   )
}
