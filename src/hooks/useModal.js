import { useState, useEffect } from "react"

const setInert = (inert) => {
  const backgroundContent = document.querySelectorAll(
    "header, .painting-page, footer"
  )
  if (inert) {
    backgroundContent.forEach((e) => {
      e.setAttribute("inert", true)
    })
  } else {
    backgroundContent.forEach((e) => {
      e.removeAttribute("inert")
    })
  }
}

export const useModal = (initialstate = false, paintingFound = true) => {
  const [modalOpen, setModalOpen] = useState(initialstate)

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setModalOpen(false)
  }

  const handleOutsideClick = (e) => {
    if (
      e.target === e.currentTarget ||
      e.target == document.querySelector(".modal-content")
    )
      setModalOpen(false)
  }

  useEffect(() => {
    if (!paintingFound) return
    const modalWrapper = document.querySelector(".modal-wrapper")
    document.body.style.overflow = modalOpen ? "hidden" : "auto"
    document.documentElement.style.setProperty(
      "--modal-visibility",
      modalOpen ? "visible" : "hidden"
    )

    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown)
      modalWrapper.addEventListener("click", handleOutsideClick)
      setInert(true)
    }

    return () => {
      if (modalOpen) {
        window.removeEventListener("keydown", handleKeyDown)
        setInert(false)
        document.querySelector(".view-image-btn").focus()
      }
    }
  }, [modalOpen, paintingFound])

  return [modalOpen, setModalOpen]
}
