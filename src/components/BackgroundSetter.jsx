import { useLayoutEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

function BackgroundSetter({ children }) {
  const { pathname } = useLocation()
  const bg = useRef(null)

  useLayoutEffect(() => {
    const path = {
      "/": "bg-home",
      "/destination": "bg-destination",
      "/crew": "bg-crew",
      "/technology": "bg-technology"
    }

    bg.current = path[pathname]

    document.body.classList.add(bg.current)

    return () => {
      document.body.classList.remove(bg.current)
    }
  }, [pathname])

  return (
    <>
      {children}
    </>
  )
}

export default BackgroundSetter