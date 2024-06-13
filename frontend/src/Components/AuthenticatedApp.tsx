import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./SidebarOptions/Dashboard";
import Sidebar from "./Sidebar";
import Projects from "./SidebarOptions/Projects";
import Messages from "./SidebarOptions/Messages";
import CreateTeam from "./SidebarOptions/CreateTeam";

interface AuthenticatedAppProps {
  isVisible: boolean;
}

const AuthenticatedApp: React.FC<AuthenticatedAppProps> = ({ isVisible }) => {
  return (
    <div className='flex h-screen fixed mt-16'>
      <Sidebar sidebarVisible={isVisible} />
      <div className='flex-1 p-4'>
        <Routes>
          <Route path='home' element={<Navigate to="/" />}/>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='projects' element={<Projects />} />
          <Route path='messages' element={<Messages />} />
          <Route path='create_team' element={<CreateTeam />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
