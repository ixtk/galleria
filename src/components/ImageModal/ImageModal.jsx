import "./ImageModal.scss"

export const ImageModal = ({ imageUrl, altText, ...dimensions }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <button className="close-btn">close</button>
        <img
          className="painting-img"
          src={imageUrl}
          alt={altText}
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
    </div>
  )
}
