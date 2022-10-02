import { useEffect } from "react"
import { Link } from "react-router-dom"
import { rootPath, formatPaintingName } from "@/utils/routeHelpers"
import { getPaintingNames } from "@/utils/getPaintings"
import { ReactComponent as BackButtonIcon } from "@/assets/back-button.svg"
import { ReactComponent as NextButtonIcon } from "@/assets/next-button.svg"
import "./SlideshowControl.scss"

const paintingNames = getPaintingNames()

export const SlideshowControl = ({ paintingName, paintingAuthor }) => {
  const paintingIndex = paintingNames.indexOf(paintingName)
  const nextBtnDisabled = paintingIndex === paintingNames.length - 1
  const backBtnDisabled = paintingIndex === 0

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--progress-bar-width",
      `${(paintingIndex + 1) * (100 / paintingNames.length)}%`
    )
  })

  return (
    <footer className="slideshow-control">
      <div className="progress-bar"></div>
      <div className="current-painting">
        <h2 className="painting-name">{paintingName}</h2>
        <span className="painting-author">{paintingAuthor}</span>
      </div>
      <div className="control-buttons">
        <Link
          to={`${rootPath}/${formatPaintingName(
            paintingNames[paintingIndex - 1]
          )}`}
          className={backBtnDisabled ? "disabled" : ""}
        >
          <BackButtonIcon />
          <span className="visually-hidden">Go to previous painting</span>
        </Link>
        <Link
          to={`${rootPath}/${formatPaintingName(
            paintingNames[paintingIndex + 1]
          )}`}
          className={nextBtnDisabled ? "disabled" : ""}
        >
          <NextButtonIcon />
          <span className="visually-hidden">Go to next painting</span>
        </Link>
      </div>
    </footer>
  )
}
