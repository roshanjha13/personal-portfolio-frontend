import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminContact = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.put(
        "http://localhost:3000/api/update-contact",
        {
          ...values,
          _id: portfolioData.contact._id,
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
        initialValues={portfolioData?.contact}
      >
        <Form.Item name="name" label="Welcome Text">
          <input placeholder=" Welcome Text" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="email" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input placeholder="gender" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input placeholder="age" />
        </Form.Item>
        <Form.Item name="country" label="Country">
          <input placeholder="country" />
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

export default AdminContact;
