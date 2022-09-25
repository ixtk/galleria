import { SlideshowControl } from "@/components/SlideshowControl"
import { ReactComponent as MaximizeIcon } from "@/assets/view-image.svg"
import { ImageModal } from "@/components/ImageModal"
import { formatPaintingName } from "@/utils"
import data from "@/data.json"
import "./PaintingPage.scss"
import { useParams } from "react-router-dom"

export const PaintingPage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const params = useParams()
  const paintingName = formatPaintingName(params.paintingName, true)
  const { artist, images, ...painting } = data.find(
    (e) => e.name.toLowerCase() === paintingName
  )

  return (
    <>
      <div className="painting-page">
        <div className="painting-wrapper">
          <button className="view-image-btn">
            <MaximizeIcon />
            <span>view image</span>
          </button>
          {/* https://stackoverflow.com/questions/68191793/specify-explicit-width-and-height-for-picture-tag */}
          <picture>
            <source
              media="(min-width: 43.75rem)"
              width={images.hero_large.width}
              height={images.hero_large.height}
              srcSet={`${baseUrl}/${images.hero_large.public_id}`}
            />
            <img
              className="painting-img"
              src={`${baseUrl}/${images.hero_small.public_id}`}
              alt={`${painting.name} by ${artist}`}
              width={images.hero_small.width}
              height={images.hero_small.height}
            />
          </picture>
          <div className="painting-overlay">
            <h1 className="painting-name">{painting.name}</h1>
            <span className="painting-author">{artist}</span>
            <img
              className="artist-img"
              src={`${baseUrl}/${images.artist.public_id}`}
              alt={artist}
              width={images.artist.width}
              height={images.artist.height}
            />
          </div>
          {/* displayed at larger screens for layout purposes */}
          <img
            className="artist-img-lg"
            src={`${baseUrl}/${images.artist.public_id}`}
            alt={artist}
            width={images.artist.width}
            height={images.artist.height}
          />
        </div>
        <div className="description-wrapper">
          <span className="painting-year">{painting.year}</span>
          <p>{painting.description}</p>
          <a className="source-link" href={painting.source} target="_blank">
            go to source
          </a>
        </div>
      </div>
      {/* <ImageModal
        imageUrl={`${baseUrl}/${images.hero_large.public_id}`}
        altText={`${painting.name} by ${artist}`}
        width={images.hero_large.width}
        height={images.hero_large.height}
      /> */}
      <SlideshowControl paintingAuthor={artist} paintingName={painting.name} />
    </>
  )
}
