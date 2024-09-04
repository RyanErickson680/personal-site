import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link
        to={item.path}
        onClick={item.subNav && showSubnav}
        className="flex justify-between items-center text-[#e1e9fc] p-5 h-15 text-lg no-underline hover:bg-[#252831] hover:border-l-4 hover:border-[#632ce4] cursor-pointer"
      >
        <div className="flex items-center">
          {item.icon}
          <span className="ml-4">{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((subItem, index) => (
          <Link
            to={subItem.path}
            key={index}
            className="bg-[#414757] h-15 pl-12 flex items-center text-[#f5f5f5] text-lg no-underline hover:bg-[#632ce4] cursor-pointer"
          >
            {subItem.icon}
            <span className="ml-4">{subItem.title}</span>
          </Link>
        ))}
    </>
  );
};

export default SubMenu;
