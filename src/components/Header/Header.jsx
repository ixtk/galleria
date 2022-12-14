import { Link, useLocation, useNavigate } from "react-router-dom"
import { rootPath, formatPaintingName } from "@/utils/routeHelpers"
import { getPaintingNames } from "@/utils/getPaintings"
import { ReactComponent as Logo } from "@/assets/logo.svg"
import "./Header.scss"

export const Header = ({ slideshowToggle, slideshowOn }) => {
  const paintingNames = getPaintingNames()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleSlideshowToggle = () => {
    if (pathname === rootPath || pathname === `${rootPath}/`) {
      navigate(`${rootPath}/${formatPaintingName(paintingNames[0])}`)
    }
    slideshowToggle(!slideshowOn)
  }

  const handleHomeRedirect = () => {
    if (slideshowOn) {
      slideshowToggle(false)
    }
  }

  return (
    <div className="header-wrapper">
      <header>
        <Link to={rootPath} onClick={handleHomeRedirect}>
          <Logo />
          <span className="visually-hidden">Galleria home page</span>
        </Link>
        <button className="slideshow-btn" onClick={handleSlideshowToggle}>
          {slideshowOn ? "stop" : "start"} slideshow
        </button>
      </header>
    </div>
  )
}
