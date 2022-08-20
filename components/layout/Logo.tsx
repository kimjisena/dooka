import {BiStoreAlt} from "react-icons/bi";

export default function Logo () {
  return (
    <div className={`flex flex-row items-center ml-4`}>
      <BiStoreAlt className={`text-content-light mr-2`} size={`32`} />
      <svg className={`bg-transparent text-3xl font-sans`} width={`80`} height={`28`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <text x={`0`} y={`22`} textAnchor={`start`} fill={`#1c2641`}>
          dooka
        </text>
      </svg>
    </div>
  );
}