import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import Event from "../events/Event"
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import GearList from "../gearlists/GearList";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [profileEvents, setProfileEvents] = useState({ results: [] });
  const [profileGearLists, setProfileGearLists] = useState({ results: [] });

  const { id } = useParams();

  const { setProfileData } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;

  const [activeButton, setActiveButton] = useState('posts');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
            { data: pageProfile }, 
            { data: profilePosts}, 
            { data: profileEvents},
            { data: profileGearLists},
        ] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
            axiosReq.get(`/events/?owner__profile=${id}`),
            axiosReq.get(`/gearlists/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setProfileEvents(profileEvents);
        setProfileGearLists(profileGearLists);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);
  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            
            <Col xs={3} className="my-2">
            <div>{profile?.events_count}</div>
              <div>events</div>
            </Col>

            <Col xs={3} className="my-2">
            <div>{profile?.gearlists_count}</div>
              <div>gear lists</div>
            </Col>
            
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };


  const mainProfilePosts = (
    <>
      <hr />
      <div className={styles.buttonContainer}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Black}`}
          onClick={() => handleButtonClick('posts')}
          variant={activeButton === 'posts' ? 'primary' : 'secondary'} 
        >
          {profile?.owner}'s posts
        </Button>

        <Button
          className={`${btnStyles.Button} ${btnStyles.Black}`}
          onClick={() => handleButtonClick('events')}
          variant={activeButton === 'events' ? 'primary' : 'secondary'} 
        >
          {profile?.owner}'s events
        </Button>

        <Button
          className={`${btnStyles.Button} ${btnStyles.Black}`}
          onClick={() => handleButtonClick('gearlists')}
          variant={activeButton === 'gearlists' ? 'primary' : 'secondary'} 
        >
          {profile?.owner}'s gearlists
        </Button>
      </div>

      <hr />

      {activeButton === 'posts' && (
        <>
        {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
        </>
      )}
      {activeButton === 'events' && (
  <>
    {profileEvents.results.length ? (
      <InfiniteScroll
        children={profileEvents.results.map((event) => (
          <Event key={event.id} {...event} setEvents={setProfileEvents} />
        ))}
        dataLength={profileEvents.results.length}
        loader={<Asset spinner />}
        hasMore={!!profileEvents.next}
        next={() => fetchMoreData(profileEvents, setProfileEvents)}
      />
    ) : (
      <Asset
        src={NoResults}
        message={`No results found, ${profile?.owner} hasn't made an event yet.`}
      />
    )}
  </>
      )}

      {activeButton === 'gearlists' && (
       <>
       {profileGearLists.results.length ? (
         <InfiniteScroll
           children={profileGearLists.results.map((gearList) => (
             <GearList key={gearList.id} {...gearList} setGearLists={setProfileGearLists} />
           ))}
           dataLength={profileGearLists.results.length}
           loader={<Asset spinner />}
           hasMore={!!profileGearLists.next}
           next={() => fetchMoreData(profileGearLists, setProfileGearLists)}
         />
       ) : (
         <Asset
           src={NoResults}
           message={`No results found, ${profile?.owner} hasn't made a gear list yet.`}
         />
       )}
     </>
      )}

    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2 mx-auto" lg={8}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;