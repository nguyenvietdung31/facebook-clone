import React from 'react';
import './ProfileSideBar.css'

function ProfileSideBar() {
        
    return (
        <div className="profileSidebar" >
            <div className="posts2">
                <h1>Intro</h1>
                <div className="intro">
                    <p>Hello World</p>
                </div>
            </div>
            <div className="posts2">
                <h1>Photos</h1>
                <div className="photos">
                    <img src='https://fileinfo.com/img/ss/xl/jpg_44.png' alt=''/>
                    <img src='https://fileinfo.com/img/ss/xl/jpg_44.png' alt=''/>
                    <img src='https://fileinfo.com/img/ss/xl/jpg_44.png' alt=''/>
                    <img src='https://fileinfo.com/img/ss/xl/jpg_44.png' alt=''/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg' alt=''/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg' alt=''/>
                </div>
            </div>
            <div className="posts2">
                <h1>Friends</h1>
                <div className="friends">
                </div>
            </div>
        </div >
    )
}

export default ProfileSideBar