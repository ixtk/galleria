import { useState, useEffect } from "react"

export const useModal = (initialstate = false) => {
  const [modalOpen, setModalOpen] = useState(initialstate)

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto"
    document.documentElement.style.setProperty(
      "--modal-visibility",
      modalOpen ? "visible" : "hidden"
    )
  }, [modalOpen])

  return [modalOpen, setModalOpen]
}
