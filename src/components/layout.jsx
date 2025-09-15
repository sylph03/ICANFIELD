// src/components/Layout.js
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Render các trang con */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
