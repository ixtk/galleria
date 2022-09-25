import "./ImageModal.scss"

export const ImageModal = ({
  imageUrl,
  altText,
  closeModal,
  ...dimensions
}) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          close
        </button>
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
