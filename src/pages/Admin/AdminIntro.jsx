import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminIntro = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.put(
        "http://localhost:3000/api/update-intro",
        {
          ...values,
          _id: portfolioData.intro._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(response.data.message);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder=" Welcome Text" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder=" first name" />
        </Form.Item>
        <Form.Item name="middleName" label="Middle Name">
          <input placeholder=" middle name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder=" last name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder=" caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder=" description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button
            className="px-5 py-2 text-white bg-red-700 rounded-full hover:bg-lime-600"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
