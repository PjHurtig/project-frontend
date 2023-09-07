import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import GearItemEditForm from "./GearItemEditForm";

import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const GearItem = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    about,
    name,
    image,
    id,
    setGearList,
    setGearItems,
  } = props;


  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/gearitems/${id}/`);
      setGearList((prevGearList) => ({
        results: [
          {
            ...prevGearList.results[0],
            gearitems_count: prevGearList.results[0].gearitems_count - 1,
          },
        ],
      }));
  
      setGearItems((prevGearItems) => ({
        results: prevGearItems.results.filter((gearitem) => gearitem.gearlist !== id),
      }));
    } catch (err) {}
  };
  
  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{name}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <GearItemEditForm
              id={id}
              profile_id={profile_id}
              about={about}
              profileImage={profile_image}
              setGearItems={setGearItems}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{about}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default GearItem;