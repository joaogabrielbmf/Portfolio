import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import ProjectsList from "./pages/Projects/ProjectsList"
import About from "./pages/About/About"
import Resume from "./pages/Resume/Resume"
import ProjectPage from "./pages/Projects/ProjectPage"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<ProjectsList/>}/>
        <Route path="/projects/:slug" element={<ProjectPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </>
  )
}

export default App
