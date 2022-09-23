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
  const painting = data.find((e) => e.name.toLowerCase() === paintingName)

  return (
    <>
      <div className="painting-page">
        <div className="painting-wrapper">
          <button className="view-image-btn">
            <MaximizeIcon />
            <span>view image</span>
          </button>
          <picture>
            <source
              media="(min-width: 43.75rem)"
              srcSet={`${baseUrl}/${painting.images.hero.large}`}
            />
            <img
              className="painting-img"
              src={`${baseUrl}/${painting.images.hero.small}`}
              alt={`${painting.name} by ${painting.artist.name}`}
            />
          </picture>
          <div className="painting-overlay">
            <h1 className="painting-name">{painting.name}</h1>
            <span className="painting-author">{painting.artist.name}</span>
            <img
              className="artist-img"
              src={`${baseUrl}/${painting.artist.image}`}
              alt={painting.artist.name}
            />
          </div>
          <img
            className="artist-img-lg"
            src={`${baseUrl}/${painting.artist.image}`}
            alt={painting.artist.name}
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
        imageUrl={`${baseUrl}/${painting.images.hero.large}`}
        altText={`${painting.name} by ${painting.artist.name}`}
      /> */}
      <SlideshowControl
        paintingAuthor={painting.artist.name}
        paintingName={painting.name}
      />
    </>
  )
}
