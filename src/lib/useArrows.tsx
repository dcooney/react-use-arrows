import {useEffect, useRef} from 'react'

// Default focusable elements.
const defaults = ['a[href]:not([disabled])', 'button:not([disabled])', 'input']

interface useArrowsProps {
   selectors?: string
   useTab?: boolean
   loop?: boolean
}

/**
 * Detect and handle arrow presses.
 *
 * @param {Object}       props           The hook props.
 * @param {boolean}      props.useTab    Boolean to determine if elements are tabbable.
 * @param {Array|string} props.selectors Array or string of focusable HTML elements.
 * @param {boolean}      props.loop      Loop elements
 * @return {Object}                      The ref.
 */
export default function useArrows(
   props: useArrowsProps
): React.RefObject<HTMLElement> {
   const {selectors = defaults, useTab = true, loop = true} = props || {}
   const ref = useRef<HTMLElement>(null)

   useEffect(() => {
      /**
       * Event listener for arrow key presses.
       */
      function arrowHandler(event: KeyboardEvent) {
         const {key} = event
         const activeElement = document ? document.activeElement : null // eslint-disable-line

         const container: HTMLElement | null = ref?.current
         if (!container) {
            return // Exit if no container faound.
         }

         // Get all selector elements.
         const elements = Array.prototype.slice.call(
            container.querySelectorAll(
               selectors.toString()
            ) as NodeListOf<HTMLElement>
         )

         if (!activeElement || !elements?.length) {
            return // Exit if no focusable elements.
         }

         // Remove tab index from focusable elements.
         if (elements && !useTab) {
            elements.forEach((element: HTMLElement, index: number) => {
               element.tabIndex = index > 0 ? -1 : 0
            })
         }

         // If active element is in the container.
         if (activeElement && container.contains(activeElement)) {
            const first = elements[0]
            const last = elements[elements.length - 1]
            const index = [...elements].indexOf(activeElement)

            // Up Arrow.
            if (key === 'ArrowUp') {
               event.preventDefault()
               setFocus(index === 0 && loop ? last : elements[index - 1])
            }

            // Down Arrow
            if (key === 'ArrowDown') {
               event.preventDefault()
               setFocus(
                  (index === elements.length - 1 || index === -1) && loop
                     ? first
                     : elements[index + 1]
               )
            }
         }
      }

      // Bind keydown event listener.
      document.addEventListener('keydown', arrowHandler, false)
      return () => {
         // Dispose of event listener on unmount.
         document.removeEventListener('keydown', arrowHandler, false)
      }
   }, [])

   return ref
}

/**
 * Set focus on an HTML element.
 */
function setFocus(element: HTMLElement) {
   if (!element) {
      return
   }
   element.focus({
      preventScroll: true
   })
}
