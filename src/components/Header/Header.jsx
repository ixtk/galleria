import { ReactComponent as Logo } from "@/assets/logo.svg"
import "./Header.scss"

export const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <Logo />
        <button className="slideshow-btn">start slideshow</button>
      </header>
    </div>
  )
}
