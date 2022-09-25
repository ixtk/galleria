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

const PageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={rootPath} replace={true} />} />
        <Route element={<PageLayout />}>
          <Route path={rootPath} element={<Gallery />} />
          <Route
            path={`${rootPath}/:paintingName`}
            element={<PaintingPage />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}
