import React from 'react';
import './Profile.css';
import { db } from '../../Firebase/firebase';
import ProfileSideBar from './ProfileSideBar.jsx';
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Upload from '../HomeBody/Upload.jsx'
import Post from '../HomeBody/Post.jsx'
import NewsFeed from '../HomeBody/NewsFeed';

function Profile({ user }) {
    const navigate = useNavigate('');
    const { username, uid } = useParams();/////
    const [profileUserData, setProfileUserData] = useState();
    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        db.collection('users').doc(uid).onSnapshot((doc) => {
            setProfileUserData(doc.data());
        })
    }, [uid])

    if (profileUserData !== undefined) {
        if (profileUserData?.displayName !== user?.displayName) {
            document.getElementsByClassName('profileAvatar')[0].style.cursor = 'context-menu';
            document.getElementById('documentUsername').style.marginBottom = '20px';
        }
    }
    document.title = `${username} || Facebook`

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => { // query bản ghi posts theo thời gian thứ tự desc trả về snapshot
            setNewsFeed(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
            })))
        })
    }, [])

    return (
        <div className='profile'>
            <div className='profile_topSection'>
                <div className='profile_coverPhoto'>
                    <img src={profileUserData?.photoURL} className='profileAvatar' alt='' />
                </div>

                <h1 id='documentUsername'>{username}</h1>
                <p className='bioText'></p>
                <div className='hr4' />

                <div className='profileHeader_options'>
                    <div className='profileHeader_left'>
                        <ul>
                            <li className="selected">Timeline</li>
                            <li>About</li>
                            <li>Friends</li>
                            <li>Photos</li>
                            <li>Archive</li>
                            <li>More</li>
                            <li><p>Edit Profile</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='postsAndIntro'>
                <ProfileSideBar />
                <div className='postAndWatch'>
                    {
                        username === user?.displayName ? (
                            <Upload username={username} />
                        ) : (
                            console.log()
                        )
                    }
                    {
                        newsFeed.map(({ id, post }) => (
                            < Post key={id} postId={id} user={user} username={post.username}
                                caption={post.caption} imageUrl={post.imageUrl} noLike={post.noLike}
                                postUserId={post.uid} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile