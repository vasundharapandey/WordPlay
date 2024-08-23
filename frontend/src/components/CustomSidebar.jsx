import React from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaPuzzlePiece, FaTrophy } from 'react-icons/fa'; // Import icons from react-icons

const CustomSidebar = () => {
  return (
    <ProSidebar style={{ height: '100vh', backgroundColor: '#1c1c1c' }}>

      {/* <div className="flex justify-center py-4">
        <img src="https://img.icons8.com/ios/50/FFFFFF/dictionary.png" alt="Company Logo" className="w-12 h-10" /> 
      </div> */}
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem icon={<FaHome />} component={<Link to="/" />}>
          Home
        </MenuItem>
        <MenuItem icon={<FaUser />} component={<Link to="/profile" />}>
          Profile
        </MenuItem>
        <MenuItem icon={<FaPuzzlePiece />} component={<Link to="/dailychallenge" />}>
          Daily Challenge
        </MenuItem>
        <MenuItem icon={<FaTrophy />} component={<Link to="/leaderboard" />}>
          Leaderboard
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default CustomSidebar;
