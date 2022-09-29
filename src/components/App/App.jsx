import { useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom"
import { Header } from "@/components/Header"
import { Gallery } from "@/components/Gallery"
import { PaintingPage } from "@/components/PaintingPage"
import { NoMatch } from "@/components/NoMatch"
import { rootPath } from "@/utils/routeHelpers"
import "./App.scss"

const PageLayout = ({ slideshowToggle, slideshowOn }) => {
  return (
    <>
      <Header slideshowToggle={slideshowToggle} slideshowOn={slideshowOn} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export const App = () => {
  const [slideshowOn, setSlideshowOn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={rootPath} replace={true} />} />
        <Route
          element={
            <PageLayout
              slideshowOn={slideshowOn}
              slideshowToggle={setSlideshowOn}
            />
          }
        >
          <Route path={rootPath} element={<Gallery />} />
          <Route
            path={`${rootPath}/:paintingName`}
            element={<PaintingPage slideshowOn={slideshowOn} />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}
