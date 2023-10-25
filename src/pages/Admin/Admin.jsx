import React, { useEffect } from "react";
import { Tabs } from "antd";
import Header from "../../components/Header/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from './AdminExperiences'
import AdminProject from './AdminProject'
import AdminContact from './AdminContact'
import AdminEducation from "./AdminEducation";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;
const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      window.location.href='/admin-login'
    }
  },[])

  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-primary">Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        <h1
          className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Experiences" key="3">
              <AdminExperiences/>
            </TabPane>
            <TabPane tab="Contact" key="4">
              <AdminContact />
            </TabPane>
            <TabPane tab="Project" key="5">
              <AdminProject />
            </TabPane>
            <TabPane tab="Education" key="6">
              <AdminEducation />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Admin;
