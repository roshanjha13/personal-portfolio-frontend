import React from 'react'
import { Form } from 'antd'
import { useSelector } from 'react-redux'
const AdminIntro = () => {

  const {portfolioData} = useSelector((state)=>state.root)

  const onFinish = (values)=>{
    console.log(values);
  }
  return (
    <div className=''>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.intro}>
        <Form.Item name='welcomeText' label='Welcome Text'>
          <input placeholder=' Welcome Text'  />
        </Form.Item>
        <Form.Item name='firstName' label='First Name'>
          <input placeholder=' first name' />
        </Form.Item>
        <Form.Item name='middleName' label='Middle Name'>
          <input placeholder=' middle name' />
        </Form.Item>
        <Form.Item name='lastName' label='Last Name'>
          <input placeholder=' last name' />
        </Form.Item>
        <Form.Item name='caption' label='Caption'>
          <input placeholder=' caption' />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <textarea placeholder=' description' />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-5 py-2 text-white bg-red-700 rounded-full hover:bg-lime-600' type='submit'>Save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro