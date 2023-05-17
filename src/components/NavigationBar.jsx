import {
  AccountCircleOutlined,
  DashboardOutlined,
  History,
  HomeOutlined,
  Insights,
  Layers,
  Settings,
} from "@mui/icons-material";
import React, { useState } from "react";
import RenderIcons from "./RenderIcons";
import { Menu } from "@mui/material";
import { Link } from "react-router-dom";
const navIcons = [
  {
    iconType: <HomeOutlined />,
    iconTitle: "Dashboard",
  },
  {
    iconType: <History />,
    iconTitle: "Recent",
  },
  {
    iconType: <Insights />,
    iconTitle: "Events",
  },
  {
    iconType: <AccountCircleOutlined />,
    iconTitle: "Profile",
  },
  {
    iconType: <DashboardOutlined />,
    iconTitle: "Boards",
  },
];
const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <div className="flex flex-col justify-between bg-[#0044d0] h-screen fixed">
        <div className="flex flex-col p-2 ">
          <div className="flex flex-col justify-center text-white text-center py-2 rounded-lg hover:bg-[#0050f0] my-2">
            <a href="/">
              <span>
                <Layers sx={{ fontSize: 36 }} />
              </span>
            </a>
          </div>
          {navIcons.map((iconItem) => (
            <div key={iconItem.title} className="flex flex-col cursor-pointer">
              <Link to={"/" + iconItem.iconTitle}>
                <RenderIcons
                  key={iconItem.iconTitle}
                  iconType={iconItem.iconType}
                  title={iconItem.iconTitle}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center text-white text-center pb-2">
          <Link to="/settings" className="cursor-pointer">
            <span>
              <Settings />
            </span>
            <p className="font-thin text-sm ">Settings</p>
          </Link>
        </div>
      </div>
      <div className="hamburger">
        <Menu />
      </div>
    </>
  );
};

export default NavigationBar;
