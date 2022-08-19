import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";


type LayoutProps = { 
  children: ReactElement
};

export default function Layout ({ children }: LayoutProps ) {

  return (
    <div className={`relative w-full`}>
      <Header />
      { children }
      <Footer />
    </div>
  );
}