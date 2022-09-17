import { ReactComponent as BackButtonIcon } from "@/assets/back-button.svg"
import { ReactComponent as NextButtonIcon } from "@/assets/next-button.svg"
import "./SlideshowControl.scss"

export const SlideshowControl = ({ paintingName, paintingAuthor }) => {
  return (
    <div className="control-wrapper">
      <div className="slideshow-control">
        <div className="current-painting">
          <h2 className="painting-name">{paintingName}</h2>
          <span className="painting-author">{paintingAuthor}</span>
        </div>
        <div className="control-buttons">
          <button>
            <BackButtonIcon />
          </button>
          <button>
            <NextButtonIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
