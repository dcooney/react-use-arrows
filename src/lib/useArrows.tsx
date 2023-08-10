import {useEffect, useRef} from 'react'

// Default focusable elements.
const defaults = [
   'a[href]:not([disabled])',
   'button:not([disabled])',
   'input',
   'textarea',
   'select',
   'details',
   '[tabindex]:not([tabindex="-1"])'
]

// 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'

interface useArrowsProps {
   selectors?: string
   useUpDown?: boolean
   useLeftRight?: boolean
   useTab?: boolean
   loop?: boolean
}

/**
 * Detect and handle arrow presses.
 */
export default function useArrows(
   props: useArrowsProps | null = null
): React.RefObject<HTMLElement> {
   const {
      selectors = defaults,
      useUpDown = true,
      useLeftRight = false,
      useTab = true,
      loop = true
   } = props || {}
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

         // Set tabindex on all focusable elements.
         elements.forEach((element: HTMLElement, index: number) => {
            if (useTab) {
               element.tabIndex = 0
            } else {
               // Remove tab index from focusable elements.
               element.tabIndex = index > 0 ? -1 : 0
            }
         })

         // If active element is in the container.
         if (activeElement && container.contains(activeElement)) {
            const first = elements[0]
            const last = elements[elements.length - 1]
            const index = [...elements].indexOf(activeElement)

            switch (key) {
               case 'ArrowUp':
                  if (useUpDown) {
                     event.preventDefault()
                     setFocus(index === 0 && loop ? last : elements[index - 1])
                  }
                  break

               case 'ArrowLeft':
                  if (useLeftRight) {
                     event.preventDefault()
                     setFocus(index === 0 && loop ? last : elements[index - 1])
                  }
                  break

               case 'ArrowDown':
                  if (useUpDown) {
                     event.preventDefault()
                     setFocus(
                        (index === elements.length - 1 || index === -1) && loop
                           ? first
                           : elements[index + 1]
                     )
                  }
                  break

               case 'ArrowRight':
                  if (useLeftRight) {
                     event.preventDefault()
                     setFocus(
                        (index === elements.length - 1 || index === -1) && loop
                           ? first
                           : elements[index + 1]
                     )
                  }
                  break

               case 'Home':
               case 'PageUp': // Home.
                  event.preventDefault()
                  setFocus(elements[0])
                  break

               case 'End':
               case 'PageDown': // End.
                  event.preventDefault()
                  setFocus(elements[elements.length - 1])
                  break
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
