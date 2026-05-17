import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppBanner from "../AppBanner";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
