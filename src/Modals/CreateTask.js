import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [areaName, setAreaName] = useState("");

  const handleChange = (event) => {
    setAreaName(event.target.value);
  };
  const handleImgChange = e =>{
    setImage(e.target.value);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["AreaName"] = areaName;
    taskObj["Image"] = image;
    save(taskObj);
    setDescription("");
    setTaskName("");
    setAreaName("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Post</ModalHeader>
        <ModalBody>
          <form action="">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={handleOnChange}
                name="taskName"
                placeholder="Title"
              />
            </div>
            <br />
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={handleOnChange}
                name="description"
                placeholder="Your place Description"
              ></textarea>
            </div><br />
            <div className="form-group">
              <label>Image</label>
              <input onChange={handleImgChange} type="file" className="form-control" name="image" value={image} />
            </div>
            <br />
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-required-label">
                Area Name
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                value={areaName}
                label="Area Name"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Dhaka"}>Dhaka</MenuItem>
                <MenuItem value={"Chittagong"}>Chittagong</MenuItem>
                <MenuItem value={"Barisal"}>Barisal</MenuItem>
                <MenuItem value={"Kulna"}>Kulna</MenuItem>
                <MenuItem value={"Rajshahi"}>Rajshahi</MenuItem>
                <MenuItem value={"Rangpur"}>Rangpur</MenuItem>
                <MenuItem value={"Pabna"}>Pabna</MenuItem>
                <MenuItem value={"Cox's Bazar"}>Cox's Bazar</MenuItem>
                <MenuItem value={"Kuyakata"}>Kuyakata</MenuItem>
                <MenuItem value={"Kustiya"}>Kustiya</MenuItem>
              </Select>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
