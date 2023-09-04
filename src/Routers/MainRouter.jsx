import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";


const MainRouter = () => {
  return (
    <div className="hero">
      <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
        </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default MainRouter