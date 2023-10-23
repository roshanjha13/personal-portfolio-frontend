import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, message } from "antd";
import axios from "axios";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

const AdminExperiences = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;

  const dispatch = useDispatch();
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/add-experience",
          values,
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(response.data.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 flex-col">
        {experience.map((item, index) => (
          <div className="shadow border p-5 border-gray-500" key={index}>
            <h1 className="text-secondary text-xl font-bold">{item.period}</h1>
            <hr />
            <h1>Company : {item.company}</h1>
            <h1>Role:{item.title}</h1>
            <h1>{item.description}</h1>
            <div className="flex justify-end gap-5">
              <button className="text-white px-5 py-2 rounded-md hover:bg-green-500 bg-cyan-600">
                Edit
              </button>
              <button className="text-white px-5 py-2 rounded-md hover:bg-green-500 bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* modal popup */}

      <Modal
        open={showAddEditModal}
        title={setSelectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="period" label="Period">
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input placeholder="Comapny" />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input placeholder="Description" />
          </Form.Item>
          <div className="flex justify-end">
            <button className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => {
                setShowAddEditModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminExperiences;
