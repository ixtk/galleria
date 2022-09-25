import { ImageCard } from "@/components/ImageCard"
import data from "@/data.json"
import "./Gallery.scss"

export const Gallery = () => {
  const imageCards = data.map(({ name, artist, images }) => {
    return (
      <ImageCard
        key={name}
        thumbnailUrl={`${import.meta.env.VITE_BASE_URL}/${
          images.thumbnail.public_id
        }`}
        paintingName={name}
        paintingAuthor={artist}
        width={images.thumbnail.width}
        height={images.thumbnail.height}
      />
    )
  })

  return <div className="gallery">{imageCards}</div>
}
