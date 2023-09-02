import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import GearList from "./GearList";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function GearListPage() {
  const { id } = useParams();
  const [gearList, setGearList] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: gearList }] = await Promise.all([
          axiosReq.get(`/gearlists/${id}`),
        ]);
        setGearList({ results: [gearList] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <GearList {...gearList.results[0]} setGearList={setGearList} gearListPage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default GearListPage;