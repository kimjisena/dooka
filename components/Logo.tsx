import { BsShopWindow, BsShop } from "react-icons/bs";
import { AiFillShop, AiOutlineShop } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import {BiStoreAlt} from "react-icons/bi";

export default function Logo () {
  return (
    <div className={`flex flex-row items-center`}>
      <BiStoreAlt className={`text-primary mr-2`} size={`32`} />
      <svg className={`bg-transparent text-3xl font-serif`} width={`80`} height={`28`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <text x={`0`} y={`22`} textAnchor={`start`} fill={`#20bead`}>
          dooka
        </text>
      </svg>
    </div>
  );
}