import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function GearItemCreateForm(props) {
  const { gearList, setGearList, setGearItems } = props;

  const [formData, setFormData] = useState({
    gearlist: "",
    name: "",
    about: "",
    image: "",
  });

  const { name, about, image } = formData;

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], 
      });
    } else {

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("about", about);
    formDataToSend.append("image", image); 
    formDataToSend.append("gearlist", gearList); 

    try {
      const { data } = await axiosRes.post(`/gearitems/`, formDataToSend);


      setGearItems((prevGearItems) => ({
        ...prevGearItems,
        results: [data, ...prevGearItems.results],
      }));

      setGearList((prevGearList) => ({
        results: [
          {
            ...prevGearList.results[0],
          },
        ],
      }));
      setFormData({
        name: "",
        about: "",
        image: null,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className={styles.Form}
            placeholder="Name..."
            name="name"
            value={name}
            onChange={handleInputChange}
          />

          <Form.Control
            className={styles.Form}
            placeholder="About..."
            name="about"
            value={about}
            onChange={handleInputChange}
            rows={2}
          />

          <Form.File
            className={styles.Form}
            name="image"
            label="Upload Image"
            onChange={handleInputChange}
            accept="image/*"
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!name.trim() || !about.trim()}
        type="submit"
      >
        Add
      </button>
    </Form>
  );
}

export default GearItemCreateForm;