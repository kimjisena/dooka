import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";

export default function Footer () {
  return (
    <footer className={`w-full md:w-4/5 mx-auto bg-header-light p-4 flex flex-col justify-between items-center`}>
      <p className={`p-2 text-lg text-content-light`}>
        <Link href={``}>
          <a className={`hover:underline hover:decoration-content-light`}>Privacy Policy</a>
        </Link>
      </p>

      <p className={`p-2 text-lg text-content-light`}>
        <Link href={``}>
          <a className={`hover:underline hover:decoration-content-light`}>Terms of Service</a>
        </Link>
      </p>

      <ul className={`flex flex-row p-2`}>
        <li className={`p-2`}>
          <a href="https://github.com/kimjisena" target={`_blank`}><div className={`w-11 h-11 bg-background-dark flex flex-row justify-center items-center rounded-full text-content-dark hover:text-violet-light`}><BsGithub size={`24`} /></div></a>
        </li>

        <li className={`p-2`}>
          <a href="https://twitter.com/kimjisena" target={`_blank`}>
            <div className={`w-11 h-11 bg-background-dark flex flex-row justify-center items-center rounded-full text-content-dark hover:text-violet-light`}><BsTwitter size={`24`} /></div>
          </a>
        </li>

        <li className={`p-2`}>
          <a href="https://freecodecamp.org/kimjisena" target={`_blank`}>
            <div className={`w-11 h-11 bg-background-dark flex flex-row justify-center items-center rounded-full text-content-dark hover:text-violet-light`}><FaFreeCodeCamp size={`24`} /></div>
          </a>
        </li>
      </ul>

      <p className={`p-2 text-content-light`}>Dooka Inc &copy; 2022. All rights reserved.</p>
    </footer>
  );
}