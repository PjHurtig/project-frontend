import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const GearList = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    gearitems_count,
    title,
    description,
    image,
    updated_at,
    gearListPage,
    category,
  } = props;


  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/gearlists/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/gearlists/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && gearListPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/gearlists/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
      {title && <Card.Title className="text-center">{title} - {category}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        <div className={styles.PostBar}>
          
          <Link to={`/gearlists/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {gearitems_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default GearList;