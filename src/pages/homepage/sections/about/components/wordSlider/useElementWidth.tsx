import { useLayoutEffect, useRef, useState } from 'react'

function useElementWidth() {
   const [elementWidth, setElementWidth] = useState();
   const elementRef = useRef<any>()

   useLayoutEffect(() => {
      if (elementRef.current) {
         setElementWidth(elementRef.current.offsetWidth);
      }
    }, []);

  return {elementRef, elementWidth}
}

export default useElementWidth