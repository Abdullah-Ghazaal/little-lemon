import HeaderSection from "./components/header section/HeaderSection";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="auto-grid">
      <HeaderSection />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
