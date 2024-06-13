import { IoMdArrowDropdown } from "react-icons/io";
const Options = () => {
  return (
    <div className='ml-10'>
      <ul className='flex gap-5 items-center font-thin '>
        <li className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
          <span> Option1 </span>
          <IoMdArrowDropdown />
        </li>
        <li className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
          <span> Option2 </span>
          <IoMdArrowDropdown />
        </li>
        <li className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
          <span> Option3 </span>
          <IoMdArrowDropdown />
        </li>
        <li className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
          <span> Option4 </span>
          <IoMdArrowDropdown />
        </li>
        <li className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
          <span> Option5 </span>
          <IoMdArrowDropdown />
        </li>
      </ul>
    </div>
  );
};

export default Options;
