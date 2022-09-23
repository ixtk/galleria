import { Link } from "react-router-dom"
import { rootPath, formatPaintingName } from "@/utils"
import "./ImageCard.scss"

export const ImageCard = ({ thumbnailUrl, paintingName, paintingAuthor }) => {
  return (
    <div className="image-card">
      <Link to={`${rootPath}/${formatPaintingName(paintingName)}`}>
        <div className="image-wrapper">
          {/* TODO: fix layout shifts */}
          <img
            src={thumbnailUrl}
            alt={`${paintingName} by ${paintingAuthor}`}
          />
        </div>
        <div className="image-overlay">
          <h2 className="painting-name">{paintingName}</h2>
          <span className="painting-author">{paintingAuthor}</span>
        </div>
      </Link>
    </div>
  )
}
