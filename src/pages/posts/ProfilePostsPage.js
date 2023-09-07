import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';
import { useParams } from 'react-router-dom';

const UserProfilePosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id)
    axios.get(`/posts/?owner__profile=${id}`)
      .then((response) => {
        setUserPosts(response.data.results);
      })
      .catch((error) => {
        console.error('error fetching user posts:', error);
      });
  }, [id]); 

  return (
    <div>
      <h1>User Posts</h1>
      {userPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default UserProfilePosts;