import { useEffect } from "react"

export const useInterval = (callback, delay, [slideshowOn, name]) => {
  useEffect(() => {
    if (!slideshowOn) return

    const id = setInterval(callback, delay)
    return () => clearInterval(id)
  }, [slideshowOn, name, callback, delay])
}
