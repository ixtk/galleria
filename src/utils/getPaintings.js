import { formatPaintingName } from "@/utils/routeHelpers"
import data from "@/data.json"

const baseUrl = import.meta.env.VITE_BASE_URL

export const getPaintings = () => {
  return data.map(({ name, artist, images }) => {
    return {
      name: name,
      artist: artist,
      imageUrl: `${baseUrl}/${images.thumbnail.public_id}`,
      width: images.thumbnail.width,
      height: images.thumbnail.height
    }
  })
}

export const getPainting = (name) => {
  const paintingName = formatPaintingName(name, true)
  const painting = data.find((e) => e.name.toLowerCase() === paintingName)

  if (!painting) return {}

  for (const type in painting.images) {
    painting.images[type].url = `${baseUrl}/${painting.images[type].public_id}`
  }

  return painting
}

export const getPaintingNames = () => {
  return data.map((e) => e.name)
}

export const getNextPaintingName = (currentPaintingName) => {
  const paintingNames = getPaintingNames()
  const paintingIndex = paintingNames.indexOf(currentPaintingName)

  const nextPaintinName = paintingNames[paintingIndex + 1] || paintingNames[0]
  return formatPaintingName(nextPaintinName)
}
