import { useNavigate, useParams } from "react-router-dom"
import { SlideshowControl } from "@/components/SlideshowControl"
import { ImageModal } from "@/components/ImageModal"
import { NoMatch } from "@/components/NoMatch"
import { getPainting, getNextPaintingName } from "@/utils/getPaintings"
import { rootPath } from "@/utils/routeHelpers"
import { useModal } from "@/hooks/useModal"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { useInterval } from "@/hooks/useInterval"
import { ReactComponent as MaximizeIcon } from "@/assets/view-image.svg"
import "./PaintingPage.scss"

const SLIDESHOW_INTERVAL = 5000

export const PaintingPage = ({ slideshowOn }) => {
  const { paintingName } = useParams()
  const navigate = useNavigate()
  const paintingData = getPainting(paintingName)

  // used to determine if hooks should proceed with logic
  const paintingFound = Object.keys(paintingData).length > 0

  const { name, artist, images, ...painting } = paintingData
  const [modalOpen, setModalOpen] = useModal(false, paintingFound)

  useDocumentTitle(name ? name : "galleria")

  useInterval(
    () => {
      navigate(`${rootPath}/${getNextPaintingName(name)}`, { replace: true })
    },
    SLIDESHOW_INTERVAL,
    [slideshowOn, name],
    paintingFound
  )

  if (!paintingFound) {
    return <NoMatch message="Painting not found" />
  }

  return (
    <>
      <div className="painting-page">
        <figure className="painting-wrapper">
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
            <figcaption>
              <h1 className="painting-name">{name}</h1>
              <span className="painting-author">{artist}</span>
            </figcaption>
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
        </figure>
        <div className="description-wrapper">
          <span className="painting-year">{painting.year}</span>
          <p>{painting.description}</p>
          <a
            className="source-link"
            rel="noreferrer"
            href={painting.source}
            target="_blank"
          >
            go to source
          </a>
        </div>
      </div>
      {modalOpen && (
        <ImageModal
          imageUrl={images.gallery.url}
          altText={`${name} by ${artist}`}
          width={images.gallery.width}
          height={images.gallery.height}
          closeModal={() => setModalOpen(false)}
        />
      )}
      <SlideshowControl paintingAuthor={artist} paintingName={name} />
    </>
  )
}
