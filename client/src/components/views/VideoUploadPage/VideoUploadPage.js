import React, { useState } from "react";
import { Typography, Button, Form, message, Input, icon } from "antd";
import Dropzone from "react-dropzone";

const { Title } = Typography;
const { TextArea } = Input;

function VideoUploadPage() {
  const kindsOptions = [
    { value: 0, label: "Private" },
    { value: 1, label: "Public" },
  ];
  const categoryOptions = [
    { value: 0, label: "Film & Animation" },
    { value: 1, label: "Auto & Vechicles" },
    { value: 2, label: "Music" },
    { value: 3, label: "Pets & Animals" },
  ];
  const [videoTitle, setVideoTitle] = useState("");
  const videoTitleHandler = (e) => {
    setVideoTitle(e.target.value);
  };
  const [description, setDescription] = useState("");
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const [kinds, setKinds] = useState(0);
  const kindsHandler = (e) => {
    setKinds(e.target.value);
  };
  const [category, setCategory] = useState("Flim in animation");
  const categoryHandler = (e) => {
    setCategory(e.target.value);
    // console.log("category:", category);
    // console.log("e.target.value : ", e.target.value);
  };
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        backgroundColor: "white",
        padding: "0 10px",
      }}
    >
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Title level={2}>Upload</Title>
      </div>

      <Form onSubmit>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Drop Down */}
          <Dropzone onDrop multiple maxSize>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <h1>+</h1>
                {/* <icon type="plus" style={{ fontSize: "3rem" }} /> */}
              </div>
            )}
          </Dropzone>

          {/* 썸네일 */}
          <div>
            <img src alt />
          </div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange={videoTitleHandler} value={videoTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={descriptionHandler} value={description} />
        <br />
        <br />
        <select onChagne={kindsHandler}>
          {kindsOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        <select onChagne={categoryHandler}>
          {categoryOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        <Button type="primary" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
