import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsFeed.css';
import { db } from '../../Firebase/firebase';
import Post from './Post.jsx';
import { useState, useEffect } from 'react';
import Upload from './Upload.jsx';

function NewsFeed({ user }) {
  const navigate = useNavigate('');
  const [newsFeed, setNewsFeed] = useState([]);
  document.title = 'Facebook';
  if (user === undefined) {
    navigate('/login')
  }

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setNewsFeed(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data(),
      })))
    })
  }, [])
  return (
    <div className='newsfeed'>
      <Upload />
      {
        newsFeed.map(({ id, post }) => (
          < Post key={id} postId={id} user={user} username={post.username}
            caption={post.caption} imageUrl={post.imageUrl} noLikes={post.noLikes}
            postUserId={post.uid} />
        ))
      }
    </div>
  )
}

export default NewsFeed
