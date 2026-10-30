import { lazy, Suspense } from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import ProjectsList from "./pages/Projects/ProjectsList"
import About from "./pages/About/About"
import ProjectPage from "./pages/Projects/ProjectPage"
import ErrorBoundary from "./components/ErrorBoundary"

const Resume = lazy(() => import("./pages/Resume/Resume"))

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<ProjectsList/>}/>
        <Route path="/projects/:slug" element={<ProjectPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route
          path="/resume"
          element={
            <ErrorBoundary>
              <Suspense fallback={null}>
                <Resume/>
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  )
}

export default App