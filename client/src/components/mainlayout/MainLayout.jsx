import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
