import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Home/Homepage";

function App() {
  return (
    <div className="auto-grid">
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
