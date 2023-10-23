import React from "react";
import { Tabs } from "antd";
import Header from "../../components/Header/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
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
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Admin;
