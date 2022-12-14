import { ImageCard } from "@/components/ImageCard"
import { getPaintings } from "@/utils/getPaintings"
import "./Gallery.scss"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"

export const Gallery = () => {
  useDocumentTitle("galleria")

  const paintings = getPaintings()

  const imageCards = paintings.map(
    ({ name, artist, imageUrl, ...dimensions }) => {
      return (
        <ImageCard
          key={name}
          thumbnailUrl={imageUrl}
          paintingName={name}
          paintingAuthor={artist}
          width={dimensions.width}
          height={dimensions.height}
        />
      )
    }
  )

  return <div className="gallery">{imageCards}</div>
}
