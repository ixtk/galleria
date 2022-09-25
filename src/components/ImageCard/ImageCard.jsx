import { Link } from "react-router-dom"
import { rootPath, formatPaintingName } from "@/utils"
import "./ImageCard.scss"

export const ImageCard = ({
  thumbnailUrl,
  paintingName,
  paintingAuthor,
  ...dimensions
}) => {
  return (
    <div className="image-card">
      <Link to={`${rootPath}/${formatPaintingName(paintingName)}`}>
        <div className="image-wrapper">
          <img
            src={thumbnailUrl}
            alt={`${paintingName} by ${paintingAuthor}`}
            width={dimensions.width}
            height={dimensions.height}
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
