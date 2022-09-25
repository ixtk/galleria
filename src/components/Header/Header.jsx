import { Link } from "react-router-dom"
import { rootPath } from "@/utils/routeHelpers"
import { ReactComponent as Logo } from "@/assets/logo.svg"
import "./Header.scss"

export const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        {/* Add invisible link text */}
        <Link to={rootPath}>
          <Logo />
        </Link>
        <button className="slideshow-btn">start slideshow</button>
      </header>
    </div>
  )
}
