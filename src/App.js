import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { MyRoutes } from "./MyRoutes/MyRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
