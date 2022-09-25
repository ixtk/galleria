export const formatPaintingName = (paintingName, reverse = false) => {
  if (!paintingName) return ""
  let formattedName = paintingName.toLowerCase()
  if (reverse) {
    return formattedName.replaceAll("-", " ")
  }
  return formattedName.replaceAll(" ", "-")
}

export const rootPath = "/gallery"
