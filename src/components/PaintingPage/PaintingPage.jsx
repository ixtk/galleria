import { SlideshowControl } from "@/components/SlideshowControl"
import "./PaintingPage.scss"

export const PaintingPage = ({ paintingInfo }) => {
  return (
    <div>
      <SlideshowControl
        paintingAuthor="Vincent Van Gogh"
        paintingName="Starry Night"
      />
    </div>
  )
}
