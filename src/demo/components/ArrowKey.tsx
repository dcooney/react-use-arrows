import React from 'react'

interface ArrowKeyProps {
   dir?: string
}

export default function ArrowKey(props: ArrowKeyProps) {
   const {dir = 'up'} = props

   function getArrow(direction: string) {
      switch (direction) {
         case 'up':
            return '↑'
         case 'down':
            return '↓'
         case 'right':
            return '→'
         case 'left':
            return '←'
      }
   }

   return (
      <kbd className="cursor-default inline-flex text-base text-black items-center px-2 py-1.5 border leading-none h-auto rounded-[3px] bg-slate-100/75">
         <span className="block">{getArrow(dir)}</span>
      </kbd>
   )
}
