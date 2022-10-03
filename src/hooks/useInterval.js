import { useEffect } from "react"

export const useInterval = (
  callback,
  delay,
  [slideshowOn, name],
  paintingFound = true
) => {
  useEffect(() => {
    if (!slideshowOn || !paintingFound) return

    const id = setInterval(callback, delay)
    return () => clearInterval(id)
  }, [slideshowOn, name, callback, delay, paintingFound])
}
