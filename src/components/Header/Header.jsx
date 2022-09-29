import { Link, useLocation, useNavigate } from "react-router-dom"
import { rootPath } from "@/utils/routeHelpers"
import { getPaintingNames } from "@/utils/getPaintings"
import { ReactComponent as Logo } from "@/assets/logo.svg"
import "./Header.scss"

export const Header = ({ slideshowToggle, slideshowOn }) => {
  const paintingNames = getPaintingNames()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleSlideshowToggle = () => {
    if (pathname === rootPath) {
      navigate(`${rootPath}/${paintingNames[0]}`)
    }
    // move this to painting page
    slideshowToggle(!slideshowOn)
  }

  const handleHomeRedirect = () => {
    if (slideshowOn) {
      slideshowToggle(false)
    }
    document.title = "galleria"
  }

  return (
    <div className="header-wrapper">
      <header>
        {/* Add invisible link text */}
        <Link to={rootPath} onClick={handleHomeRedirect}>
          <Logo />
        </Link>
        <button className="slideshow-btn" onClick={handleSlideshowToggle}>
          {slideshowOn ? "stop" : "start"} slideshow
        </button>
      </header>
    </div>
  )
}
