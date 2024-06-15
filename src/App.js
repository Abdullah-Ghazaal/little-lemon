import HeaderSection from "./components/header section/HeaderSection";
import Homepage from "./pages/Homepage";
import FooterSection from "./components/footer section/Footer";

function App() {
  return (
    <div className="auto-grid">
      <HeaderSection />
      <main>
        <Homepage />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
