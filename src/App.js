import HeaderSection from "./components/header section/HeaderSection";
import FooterSection from "./components/footer section/FooterSection";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="auto-grid">
      <HeaderSection />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
