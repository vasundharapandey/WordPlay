// Layout.jsx
import React from 'react';
import CustomSidebar from './components/CustomSidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex">
      <CustomSidebar />
      <div className="flex-grow p-1 bg-slate-950">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
