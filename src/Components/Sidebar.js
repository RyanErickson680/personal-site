import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);



  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* Sidebar toggle button */}
        <div className=" h-20 flex justify-start items-center fixed top-0 w-full z-50">
          <Link to="#" className="ml-8 text-2xl h-20 flex justify-start items-center">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        {/* Sidebar menu */}
        <nav
          className={`bg-gray-900 w-64 h-screen flex justify-center fixed top-0 transition-all duration-350 z-50 ${
            sidebar ? 'left-0' : '-left-full'
          }`}
        >
          <div className="w-full">
            {/* Close button */}
            <Link to="#" className="ml-8 text-2xl h-20 flex justify-start items-center">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {/* Menu items */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;