import React, {useEffect, useState} from 'react'
import useArrows from '../../lib/useArrows'
import ArrowKey from '../components/ArrowKey'

export default function Dropdown() {
   const [active, setActive] = useState(false)
   const btnClass =
      'no-underline focus:underline inline-block py-1.5 px-2 focus:bg-white hover:bg-white border border-transparent focus:border-slate-100 hover:border-slate-100'

   const ref = useArrows({
      useLeftRight: false,
      loop: false,
      useTab: false
   }) as React.RefObject<HTMLUListElement>

   /**
    * Handle keyboard controls.
    *
    * @param {Event} event The click event.
    */
   function handleEsc(event: KeyboardEvent) {
      const {key} = event
      switch (key) {
         // Exit if esc and no focusable elements.
         case 'Esc':
         case 'Escape': // Escape
            setActive(false)
            break

         default:
            break
      }
   }

   useEffect(() => {
      if (active) {
         // Set focus on first dropdown item.
         ref.current?.querySelector('a')?.focus()
      }
   }, [active])

   useEffect(() => {
      document.addEventListener('keydown', handleEsc)
      return () => {
         document.removeEventListener('keydown', handleEsc)
      }
   }, [])

   return (
      <div className="grid gap-2.5">
         <h2 className="m-0">Dropdown</h2>
         <p className="text-sm m-0 mb-2 p-0">
            Open the dropdown menu and use your <ArrowKey dir="up" /> and{' '}
            <ArrowKey dir="down" /> arrow keys to move through the navigation
            items.
         </p>
         <div className="relative">
            <button
               className="btn btn-neutral"
               onClick={() => setActive(!active)}
            >
               Toggle Menu
            </button>
            {!!active && (
               <div className="absolute top-full left-0 w-full border rounded-md py-4 px-5 shadow-md m-0 mt-1 bg-slate-50 text-sm">
                  <h3 className="p-0 pb-2 border-b m-0 mb-2">Other Projects</h3>
                  <ul ref={ref} className="list-none p-0 pt-1 m-0">
                     <li>
                        <a href="https://connekthq.com" className={btnClass}>
                           Connekt Media
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://connekthq.com/plugins/ajax-load-more/"
                           className={btnClass}
                        >
                           Ajax Load More
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://getinstantimages.com"
                           className={btnClass}
                        >
                           Instant Images
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://dcooney.github.io/react-a11y-dropdown/"
                           className={btnClass}
                        >
                           React A11y Dropdown
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://dcooney.github.io/react-a11y-dropdown/"
                           className={btnClass}
                        >
                           React A11y Dropdown
                        </a>
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </div>
   )
}
