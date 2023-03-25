import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function BackgroundImg({ children }) {
  const location = useLocation()

  useEffect(() => {
    const path = {
      "/": "bg-home",
      "/destination": "bg-destination",
      "/crew": "bg-crew",
      "/technology": "bg-technology"
    }

    const bgImg = path[location.pathname]

    document.body.classList.add(bgImg)

    return () => {
      document.body.classList.remove(bgImg)
    }
  }, [location.pathname])

  return (
    <>
      {children}
    </>
  )
}

export default BackgroundImg