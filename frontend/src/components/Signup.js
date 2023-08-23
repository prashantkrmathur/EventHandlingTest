import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const Signup = () => {
    const formRef = React.useRef(null);
    const [response, setResponse] = useState("")

    const onFinish = async (values) => {
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.post("http://localhost:2244/api/newuser", JSON.stringify(values), customConfig);
        setResponse(response.data.message)
        formRef.current?.resetFields();
    };
    const onReset = () => {
        formRef.current?.resetFields();
    };

    return (
        <div style={{ textAlign: "-webkit-center", padding: "2em", backgroundColor: "azure", height: "100vh" }}>
            <div className='w-100 text-center mt-2'
                style={{
                    fontSize: "x-large",
                    color: "brown",
                    marginLeft: "3em",
                    marginBottom: "1em"
                }}>
                {response}
            </div>
            <Form
                {...layout}
                ref={formRef}
                name="control-ref"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    name="firstName"
                    label="FirstName"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="LastName"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button style={{ marginLeft: "1em" }} htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
            <h4 className='w-100 text-center mt-2' style={{ marginLeft: "13em" }}>
                Have an account  ? <Link to='/login'>Login</Link>
            </h4>
        </div>
    );
};
export default Signup;