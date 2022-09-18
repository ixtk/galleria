import { SlideshowControl } from "@/components/SlideshowControl"
import { ReactComponent as MaximizeIcon } from "@/assets/view-image.svg"
import { ImageModal } from "@/components/ImageModal"
import data from "@/data.json"
import "./PaintingPage.scss"

export const PaintingPage = ({ paintingName }) => {
  const painting = data.find((p) => p.name === paintingName)
  const baseUrl = import.meta.env.VITE_BASE_URL

  return (
    <>
      <div className="painting-page">
        <div className="painting-wrapper">
          <button className="view-image-btn">
            <MaximizeIcon />
            <span>view image</span>
          </button>
          <img
            className="painting-img"
            src={`${baseUrl}/${painting.images.gallery}`}
            alt={`${painting.name} by ${painting.artist.name}`}
          />
          <div className="painting-overlay">
            <h1 className="painting-name">{paintingName}</h1>
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
        imageUrl={`${baseUrl}/${painting.images.gallery}`}
        altText={`${painting.name} by ${painting.artist.name}`}
      /> */}
      <SlideshowControl
        paintingAuthor={painting.artist.name}
        paintingName={paintingName}
      />
    </>
  )
}
