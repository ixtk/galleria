import "./ImageModal.scss"

export const ImageModal = ({ imageUrl, altText }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <button className="close-btn">close</button>
        <img className="painting-img" src={imageUrl} alt={altText} />
      </div>
    </div>
  )
}
