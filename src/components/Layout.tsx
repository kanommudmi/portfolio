import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./header";
import Footer from "./footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative bg-background text-foreground">
      <div className="absolute inset-0 z-0 overflow-hidden dark:block hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-70"></div>
      </div>
      <div className="relative z-20">
        <Header />
      </div>
      <main className="relative z-10 container mx-auto px-4 flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default Layout;
