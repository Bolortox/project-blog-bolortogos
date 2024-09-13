import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-full m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
