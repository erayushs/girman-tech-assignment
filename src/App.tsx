import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-[#B1CBFF] to-white min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
