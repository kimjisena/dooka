import NavBar from "./NavBar";
import GetStartedButton from "./GetStartedButton";
import Logo from "./Logo";

let authenticated: boolean = false;

export default function Header () {
  return (
    <header className={`z-50 fixed top-0 left-0 md:left-[10%] bg-header-light
      w-full md:w-4/5 h-20 flex flex-row justify-between items-center`}>
      <Logo />
      {authenticated ?  <NavBar />: <GetStartedButton /> }
    </header>
  );
}