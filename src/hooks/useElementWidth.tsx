import { useLayoutEffect, useRef, useState } from 'react'

function useElementWidth() {
   const [elementWidth, setElementWidth] = useState(undefined);
   const elementRef = useRef<any>()

   useLayoutEffect(() => {
      if (elementRef.current) {
         setElementWidth(elementRef.current.offsetWidth);
      }
    }, []);

    const extendedWidth = (pixels: number) => {
      if (elementWidth !== undefined ) {
         return elementWidth + pixels
      }
    }

  return {elementRef, elementWidth, extendedWidth}
}

export default useElementWidth