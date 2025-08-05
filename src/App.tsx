import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-dark-06  ">
      <div>
        <NavBar />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
