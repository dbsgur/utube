import React, { useState } from "react";
import { Form, Select, Radio, Button, Upload, Input } from "antd";
import Dropzone from "react-dropzone";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

// const { Title } = Typography;
// const { TextArea } = Input;

function VideoUploadPage() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "white",
        padding: "0 10px",
      }}
    >
      {/* <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Title level={2}>Upload</Title>
      </div> */}

      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <Form.Item
          name={["user", "Title"]}
          label="Title"
          rules={[
            {
              required: true,
              message: "Please select your video's title!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "Description"]}
          label="Description"
          rules={[
            {
              required: true,
              message: "Please select your video's description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="select"
          label="Select"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="categories"
          label="CATEGORY"
          rules={[
            {
              required: true,
              message: "Please select your video categories!!",
              type: "array",
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Please select your video categories"
          >
            <Option value="flim">Film & Animation</Option>
            <Option value="auto">Auto & Vechicles</Option>
            <Option value="music">Music</Option>
            <Option value="pet">Pets & Animals</Option>
            <Option value="education">Education</Option>
          </Select>
        </Form.Item>

        {/* Publci & Private */}
        <Form.Item
          name="secure"
          label="SECURE"
          rules={[
            {
              required: true,
              message: "Please pick an item!",
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="private">Private</Radio.Button>
            <Radio.Button value="public">Public</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="ㅁㄹㄹ"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}

        <Form.Item label="Dragger">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
