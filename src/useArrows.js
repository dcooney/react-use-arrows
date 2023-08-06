import { useEffect, useRef } from 'react';

// Default focusable elements.
const defaults = ['a[href]:not([disabled])', 'button:not([disabled])', 'input'];

/**
 * Detect and handle arrow presses.
 * 
 * @param {Object}       props           The hook props.
 * @param {boolean}      props.useTab    Boolean to determine if elements are tabbable.
 * @param {Array|string} props.selectors Array or string of focusable HTML elements.
 * @param {boolean}      props.loop      Loop elements
 * @return {Object}                      The ref.
 */
export default function useArrows(props) { 
	const { selectors = defaults, useTab = true, loop = true } = props || {};
	const ref = useRef();

	useEffect(() => {
		/**
		 * Event listener for arrow key presses.
		 *
		 * @param {KeyboardEvent} e The event.
		 */
		function arrowHandler(e) {
			const { key } = e;
			const activeElement = document ? document.activeElement : null; // eslint-disable-line
			const elements = ref?.current?.querySelectorAll(
				selectors.toString()
			);

			if (!activeElement || !elements?.length) {
				return; // Exit if no focusable elements.
			}

			// Remove tab index from focusable elements.
			if (elements && !useTab) {
				elements.forEach((element, index) => {
					element.tabIndex = index > 0 ? -1 : 0;
				});
			}

			// If active element is in the container.
			if (activeElement && ref?.current?.contains(activeElement)) {
				const first = elements[0];
				const last = elements[elements.length - 1];
				const index = [...elements].indexOf(activeElement);

				// Up Arrow.
				if (key === 'ArrowUp') {
					e.preventDefault();
					setFocus(index === 0 && loop ? last : elements[index - 1]);
				}

				// Down Arrow
				if (key === 'ArrowDown') {
					e.preventDefault();
					setFocus(
						(index === elements.length - 1 || index === -1) && loop
							? first
							: elements[index + 1]
					);
				}
			}
		}

		// Bind keydown event listener.
		document.addEventListener('keydown', arrowHandler, false);
		return () => {
			// Dispose of event listener on unmount.
			document.removeEventListener('keydown', arrowHandler, false);
		};
	}, []);

	return ref;
}

/**
 * Set focus on an HTML element.
 *
 * @param {HTMLElement} element The focusable element.
 */
function setFocus(element) {
	if (!element) {
		return;
	}
	element.focus({
		preventScroll: true,
	});
}
