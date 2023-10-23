import React from "react";
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
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="mt-5 p-5">
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
