import NavBar from "./NavBar";
import GetStartedButton from "./GetStartedButton";
import Logo from "./Logo";

let authenticated: boolean = false;

export default function Header () {
  return (
    <header className={`fixed w-full h-20 bg-secondary flex flex-row`}>
      <Logo />
      {authenticated ?  <NavBar />: <GetStartedButton /> }
    </header>
  );
}