import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminAbout = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",")
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await axios.put(
        "http://localhost:3000/api/update-about",
        {
          ...values,
          _id: portfolioData.about._id,
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
        initialValues={{
          ...portfolioData.about,
          skills:portfolioData.about.skills.join(' ,'),
        }}
      >
        <Form.Item name="lottieUrl" label="Lottie Url">
          <input placeholder=" lottieUrl" />
        </Form.Item>
        <Form.Item name="description1" label="Description1">
          <textarea placeholder=" Description1" />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
          <textarea placeholder=" Description2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
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

export default AdminAbout;
