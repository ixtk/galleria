import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SlideshowControl } from "@/components/SlideshowControl"
import { ImageModal } from "@/components/ImageModal"
import { getPainting } from "@/utils/getPaintings"
import { ReactComponent as MaximizeIcon } from "@/assets/view-image.svg"
import "./PaintingPage.scss"

export const PaintingPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { paintingName } = useParams()
  const { name, artist, images, ...painting } = getPainting(paintingName)

  useEffect(() => {
    document.querySelector("body").style.overflow = modalOpen
      ? "hidden"
      : "auto"
    document
      .querySelector("html")
      .style.setProperty("--modal-visibility", modalOpen ? "visible" : "hidden")
  })

  return (
    <>
      <div className="painting-page">
        <div className="painting-wrapper">
          <button className="view-image-btn" onClick={() => setModalOpen(true)}>
            <MaximizeIcon />
            <span>view image</span>
          </button>
          {/* https://stackoverflow.com/questions/68191793/specify-explicit-width-and-height-for-picture-tag */}
          <picture>
            <source
              media="(min-width: 43.75rem)"
              width={images.hero_large.width}
              height={images.hero_large.height}
              srcSet={images.hero_large.url}
            />
            <img
              className="painting-img"
              src={images.hero_small.url}
              alt={`${name} by ${artist}`}
              width={images.hero_small.width}
              height={images.hero_small.height}
            />
          </picture>
          <div className="painting-overlay">
            <h1 className="painting-name">{name}</h1>
            <span className="painting-author">{artist}</span>
            <img
              className="artist-img"
              src={images.artist.url}
              alt={artist}
              width={images.artist.width}
              height={images.artist.height}
            />
          </div>
          {/* displayed at larger screens for layout purposes */}
          <img
            className="artist-img-lg"
            src={images.artist.url}
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
      {modalOpen && (
        <ImageModal
          imageUrl={images.hero_large.url}
          altText={`${name} by ${artist}`}
          width={images.hero_large.width}
          height={images.hero_large.height}
          closeModal={() => setModalOpen(false)}
        />
      )}
      <SlideshowControl paintingAuthor={artist} paintingName={name} />
    </>
  )
}
