import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col scroll-smooth">
    <Navbar />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default Layout;
