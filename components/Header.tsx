import NavBar from "./NavBar";
import GetStartedButton from "./GetStartedButton";
import Logo from "./Logo";

let authenticated: boolean = false;

export default function Header () {
  return (
    <header className={`fixed w-full h-20 border-b-[1px] border-success-light bg-success-light shadow-md shadow-success-dark flex flex-row justify-between items-center`}>
      <Logo />
      {authenticated ?  <NavBar />: <GetStartedButton /> }
    </header>
  );
}