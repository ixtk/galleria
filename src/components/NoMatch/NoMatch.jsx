import "./NoMatch.scss"
import { Link } from "react-router-dom"
import { rootPath } from "@/utils/routeHelpers"

export const NoMatch = ({ message }) => {
  return (
    <div className="error-page">
      <h1>{message}</h1>
      <Link to={rootPath}>Home</Link>
    </div>
  )
}
