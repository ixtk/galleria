import "./ImageCard.scss"

export const ImageCard = ({ thumbnailUrl, paintingName, paintingAuthor }) => {
  return (
    <div className="image-card">
      <a href="#">
        <div className="image-container">
          <img
            src={thumbnailUrl}
            alt={`${paintingName} by ${paintingAuthor}`}
          />
        </div>
        <div className="image-overlay">
          <h2 className="painting-name">{paintingName}</h2>
          <span className="painting-author">{paintingAuthor}</span>
        </div>
      </a>
    </div>
  )
}
