import React from 'react'
import './SidebarRow.css'

function SidebarRow({ImageLink, title, dropdown, avatar}) {
  return (
    <div className='sidebarRow'>
        <img src={ImageLink} alt='' className={`sidebarRow_icon ${avatar && "avatar"} ${dropdown && "vanish"}`}/>
        <div className={`dropdownDiv ${dropdown && "display"}`}>
            <i className={`dropdown ${dropdown && "display"}`}/>
        </div>
        <h2 className={`sidebarRow_title`}>{title}</h2>
    </div>
  )
}

export default SidebarRow