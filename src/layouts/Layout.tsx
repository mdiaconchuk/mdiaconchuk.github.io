import { Outlet } from "react-router-dom";
import Navbar from "../assets/Components/Basics/Navbar/Navbar";
import Footer from "../assets/Components/Basics/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
