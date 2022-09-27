import React from 'react'
import './Sidebar2.css'
import Sidebar2Row from './Sidebar2Row.jsx'

function Sidebar2() {
  return (
    <div className='sidebar2'>

      <div className='detail'>
        <h1>Contacts</h1>
        <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="searchIcon2"><g fill-rule="evenodd" transform="translate(-448 -544)"><g fill-rule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg>
        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" className="moreIcon2"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
      </div>
      <div className='contact'>
        <Sidebar2Row ImageURL="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.0-1/p148x148/118481251_3275143269198791_1562775451854010190_n.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=DJ5eF_SWz8gAX_k1CMp&_nc_ht=scontent.fhyd11-1.fna&tp=6&oh=3eb6fe833a57e157b042a857b554baba&oe=5F739318" title="Railash" />
        <Sidebar2Row ImageURL="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" title="Hello World" />
      </div>
      <div className='hr'></div>
      <div className='detail'>
        <h1>Group Chat</h1>
      </div>
      <div className='group_chat'>
        <Sidebar2Row ImageURL="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" title="Group 1" />
        <Sidebar2Row ImageURL="https://static.appvn.com/a/uploads/thumbnails/022016/facebook-groups_icon.png" title="Group 2" />
      </div>
    </div>
  )
}

export default Sidebar2
