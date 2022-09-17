import { Header } from "@/components/Header"
import { Gallery } from "@/components/Gallery"
import { PaintingPage } from "@/components/PaintingPage"
import "./App.scss"

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        {/* <PaintingPage paintingName="Starry Night" /> */}
      </main>
    </>
  )
}
