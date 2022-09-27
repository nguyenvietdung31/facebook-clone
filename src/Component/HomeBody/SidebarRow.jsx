import React from 'react'
import './SidebarRow.css'

function SidebarRow({ImageLink, title, dropdown, avatar}) {
  return (
    <div className='sidebarRow'>
        <img src={ImageLink} alt='' className={`sidebarRow_icon ${avatar && "avatar"} ${dropdown && "vanish"}`}/>
        <div className={`dropdownDiv ${dropdown && "display"}`}>
            <i className={`dropdown ${dropdown && "display"}`}>
            <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="dropdownDisplaySeeMore"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
            </i>
        </div>
        <h2 className={`sidebarRow_title`}>{title}</h2>
    </div>
  )
}

export default SidebarRow