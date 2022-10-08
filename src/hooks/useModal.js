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

export const useModal = (initialstate = false) => {
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
    if (!modalOpen) return

    document.body.style.overflow = "hidden"
    document.documentElement.style.setProperty("--modal-visibility", "visible")

    const modalWrapper = document.querySelector(".modal-wrapper")
    modalWrapper.addEventListener("click", handleOutsideClick)
    window.addEventListener("keydown", handleKeyDown)

    setInert(true)

    return () => {
      document.body.style.overflow = "auto"
      document.documentElement.style.setProperty("--modal-visibility", "hidden")
      window.removeEventListener("keydown", handleKeyDown)
      setInert(false)
      document.querySelector(".view-image-btn").focus()
    }
  }, [modalOpen])

  return [modalOpen, setModalOpen]
}
