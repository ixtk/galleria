import { ReactComponent as Logo } from "@/assets/logo.svg"
import "./Header.scss"

export const Header = () => {
  return (
    <div className="container header-container">
      <header>
        <Logo />
        <button className="slideshow-btn">start slideshow</button>
      </header>
    </div>
  )
}
