import React, { useState } from "react";

import Form from "react-bootstrap/Form";

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
        image: "",
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
    <h3>Add Gear Item:</h3>
        <Form.Group>
            <Form.Control 
            placeholder="Name..."
            name="name"
            value={name}
            onChange={handleInputChange} 
            />
        </Form.Group>
    
        <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control 
            placeholder="About..."
            name="about"
            value={about}
            onChange={handleInputChange}
            as="textarea" 
            rows={3} 
            />
        </Form.Group>
        <Form.File
            name="image"
            label="Upload Image"
            onChange={handleInputChange}
            accept="image/*"
        />
        
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