import { Outlet } from "react-router-dom";
import Navbar from "../assets/Components/Basics/Navbar/Navbar";
import Contact from "../assets/Components/Sections/Contact";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Contact/>
    </>
  );
}

export default Layout;
