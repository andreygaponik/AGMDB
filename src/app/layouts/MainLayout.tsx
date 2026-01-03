import Footer from "@/widgets/Header/Footer/Footer";
import Header from "@/widgets/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
