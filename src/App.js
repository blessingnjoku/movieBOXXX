
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDisplays from "./Component/MovieDisplays";
import Footer from "./Component/Footer";
import WatchMovie from "./Component/IndividualMovies/WatchMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
           
                <Home />
           
            }
          />
          <Route
            path="/:id"
            element={
          
               <WatchMovie/>
          
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
