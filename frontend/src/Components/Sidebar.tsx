import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
//   HiOutlineLogout,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineMail,
} from "react-icons/hi";
interface SidebarProps {
  sidebarVisible: boolean;
}
const elements = [
  {
    key: "home",
    label: "Home",
    icon: <HiOutlineHome />,
  },
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "projects",
    label: "Projects",
    icon: <HiOutlineCube />,
  },
  {
    key: "messages",
    label: "Messages",
    icon: <HiOutlineMail/>,
  },
  {
    key: "create_team",
    label: "Create Team",
    icon: <HiOutlineUserGroup />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarVisible }) => {
  const location = useLocation();
  return (
    <div
      className={`top-0 left-0 w-56 bg-gray-900/20 text-white transition-transform duration-300 ${
        sidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className='flex flex-col h-[90vh] overflow-hidden p-2'>
        <div className='flex flex-col flex-grow py-5 gap-4'>
          {elements.map((element) => (
            <Link
              key={element.key}
              to={`/app/${element.key}`}
              className={`flex items-center px-4 py-2 text-lg font-medium text-gray-300 transition-colors duration-300 hover:bg-gray-700 rounded hover:no-underline ${
                location.pathname === `/app/${element.key}`
                  ? "bg-gray-700"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className='mr-3 text-xl'>{element.icon}</span>
              {element.label}
            </Link>
          ))}
        </div>
        {/* <div className='mt-auto'>
          <div className='flex  items-center justify-center py-2 font-medium transition-colors duration-200 border hover:text-red-700 hover:border-red-500 cursor-pointer'>
            <span className='mr-5 text-xl'>
              <HiOutlineLogout />
            </span>
            LOGOUT
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
