import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, message } from "antd";
import axios from "axios";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";

const AdminExperiences = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onClear = (e) => {
    setShowAddEditModal("");
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.put(
          "http://localhost:3000/api/update-experience",
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        )
      } else {
        response = await axios.post(
          "http://localhost:3000/api/add-experience",
          values
        );
      }
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/delete-experience",
        {
          _id: values._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
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
      <div className="grid grid-cols-4 gap-5 mt-5">
        {experience.map((item, index) => (
          <div className="shadow border p-5 border-gray-500" key={index}>
            <h1 className="text-secondary text-xl font-bold">{item.period}</h1>
            <hr />
            <h1>Company : {item.company}</h1>
            <h1>Role:{item.title}</h1>
            <h1>{item.description}</h1>
            <div className="flex justify-end gap-5">
              <button
                className="text-white px-5 py-2 rounded-md hover:bg-green-500 bg-cyan-600"
                onClick={() => {
                  setSelectedItemForEdit(item);
                  setShowAddEditModal(true);
              
                }}
              >
                Edit
              </button>
              <button
                className="text-white px-5 py-2 rounded-md hover:bg-green-500 bg-red-600"
                onClick={() => {
                  onDelete(item);
                }}
              >
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
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={selectedItemForEdit}
        >
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
                setSelectedItemForEdit(null);
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
